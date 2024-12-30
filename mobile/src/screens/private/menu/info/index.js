import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Colors } from '../../../../core/theme';
import { CustomerSettings } from '../../../../service/doctype'; // Ensure this is properly configured
import TextInputDoc from '../../../../component/TextInputDoc';

const UpdateUser = ({ navigation, route }) => {
    const { userData } = useState({}); // Pass the user's current data via navigation params
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstname: userData?.firstname || '',
            lastname: userData?.lastname || '',
            username: userData?.username || '',
            email: userData?.email || '',
            password: '',
            phone_number: userData?.phone_number || '',
            address: userData?.address || '',
            image: userData?.image || '',
        },
    });

    const onSubmit = async (data) => {
        console.log(data);

        try {
            const response = await CustomerSettings.updateCustomers({
                ...data,
                id: userData.id, // Assuming `id` is required for update
            });
            console.log('Customer updated successfully:', response);
            Alert.alert('Success', 'Customer updated successfully!', [
                { text: 'OK', onPress: () => navigation.goBack() },
            ]);
        } catch (error) {
            console.error('Error updating customer:', error);
            Alert.alert('Error', 'Failed to update the customer. Please try again.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Controller
                control={control}
                name="firstname"
                rules={{
                    required: 'First name is required.',
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInputDoc
                        placeholder="First Name"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        error={errors.firstname?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="lastname"
                rules={{
                    required: 'Last name is required.',
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInputDoc
                        placeholder="Last Name"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        error={errors.lastname?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="username"
                rules={{
                    required: 'Username is required.',
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInputDoc
                        placeholder="Username"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        error={errors.username?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'Email is required.',
                    pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Invalid email format.',
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInputDoc
                        placeholder="Email"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        keyboardType="email-address"
                        error={errors.email?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                    <TextInputDoc
                        placeholder="Password (Leave blank to keep unchanged)"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        secureTextEntry
                        error={errors.password?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="phone_number"
                rules={{
                    pattern: {
                        value: /^[0-9]+$/,
                        message: 'Phone number must contain only digits.',
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInputDoc
                        placeholder="Phone Number"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        keyboardType="phone-pad"
                        error={errors.phone_number?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="address"
                render={({ field: { onChange, value } }) => (
                    <TextInputDoc
                        placeholder="Address"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        error={errors.address?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="image"
                render={({ field: { onChange, value } }) => (
                    <TextInputDoc
                        placeholder="Image URL"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                        error={errors.image?.message}
                    />
                )}
            />
            <View style={{ marginBottom: 50 }}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default UpdateUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.white,
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
    },
    button: {
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#E59135',
        borderRadius: 15,
        marginBottom: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
