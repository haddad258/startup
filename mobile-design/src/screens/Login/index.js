import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <TouchableOpacity style={{
                alignItems: 'center',
                backgroundColor: '#DDDDDD',
                padding: 10,
            }} onPress={() => navigation.navigate("TabPublic")} >
                <Text>Press Here to Login</Text>

            </TouchableOpacity>
        </View>
    );
};
export default LoginScreen;