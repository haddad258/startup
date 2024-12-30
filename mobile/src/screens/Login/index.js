import React from 'react';
import { TouchableOpacity, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import Background from '../../component/Login/Background';
import Logo from '../../component/Login/Logo';
import Header from '../../component/Login/Header';
import Button from '../../component/Login/Button';
import TextInput from '../../component/Login/TextInput';
import { useDispatch } from 'react-redux';
import { Colors } from '../../core/theme';
import { UserLogin } from '../../service';
import { setUserInfo } from '../../store/user/action';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: 'haddadpo@mail.com', // Initial email value
      password: '12345',                // Initial password value
    },
  });

  const onLogin = async (data) => {
    try {
      const loginResponse = await UserLogin.UserLoginAPI(
        JSON.stringify({
          email: data.email,
          password: data.password,
        })
      );
      if (loginResponse.success) {
        console.log(loginResponse.token)

        const isAuthenticated = await UserLogin.Authenticate(loginResponse);

        if (isAuthenticated) {
          dispatch(setUserInfo(loginResponse.data));
          navigation.reset({
            index: 0,
            routes: [{ name: 'TabUsersAccount' }],
          });
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Background>
      <Logo />
      <Header>SmartErp</Header>
      <View style={{ width: '100%' }}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorText={errors.email?.message}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password must be at least 5 characters',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              errorText={errors.password?.message}
              secureTextEntry
            />
          )}
        />
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      {isSubmitting ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <Button mode="contained" onPress={handleSubmit(onLogin)}>
          Log in
        </Button>
      )}
      <View style={styles.row}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace('Register')}>
          <Text style={styles.link}> Create!</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 16,
  },
  forgot: {
    fontSize: 13,
    color: Colors.primary,
  },
  link: {
    fontWeight: 'bold',
    color: Colors.primary,
    marginLeft: 4,
  },
});
