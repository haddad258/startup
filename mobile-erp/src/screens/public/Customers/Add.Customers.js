import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../core/theme';
import { CustomerSettings } from '../../../service/doctype'; // Ensure this is properly configured
import TextInputDoc from '../../../components/Doctype/TextInputDoc';
import SelectInputDocs from '../../../components/Doctype/SelectInputDocs';
import SelectInputStatic from '../../../components/Doctype/SelectInputStatic';

const AddCustomerScreen = ({ navigation }) => {
    const [customer, setCustomer] = useState({
        customer_name: '',
        customer_type: '', // Default value
        customer_group: '', // Default value
        territory: '',
        email_id: '',
        custom_phone:''

    });

    const handleSave = async () => {
        // Check for empty fields
        if (
            !customer.customer_name.trim() ||
            !customer.customer_type.trim() ||
            !customer.customer_group.trim() ||
            !customer.territory.trim() ||
            !customer.email_id.trim()
        ) {
            Alert.alert(
                'Validation Error',
                'All fields are required. Please fill out all fields before saving.'
            );
            return;
        }

        try {
            console.log(customer);
            const response = await CustomerSettings.addcustomers(customer);
            console.log('Customer added successfully:', response);
            Alert.alert('Success', 'Customer added successfully!', [
                { text: 'OK', onPress: () => navigation.goBack() },
            ]);
        } catch (error) {
            console.error('Error adding customer:', error);
            Alert.alert('Error', 'Failed to add the customer. Please try again.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <TextInputDoc
                placeholder="Customer Name"
                value={customer.customer_name}
                onChangeText={(text) => setCustomer({ ...customer, customer_name: text })}
                style={styles.input}
            />
            <SelectInputStatic
                placeholder="Customer Type (e.g., Individual or Company)"
                value={customer.customer_type}
                onChangeText={(text) => setCustomer({ ...customer, customer_type: text })}
                style={styles.input}
                data={["Individual", "Company", "Partnership"]}
            />
            <SelectInputDocs
                placeholder="Customer Group"
                value={customer.customer_group}
                onChangeText={(option) => setCustomer({ ...customer, customer_group: option.name })}
                style={styles.input}
                doctype={"Customer Group"}
            />
            <SelectInputDocs
                placeholder="Territory"
                value={customer.territory}
                onChangeText={(option) => setCustomer({ ...customer, territory: option.name })}
                style={styles.input}
                doctype={"Territory"}

            />
            <TextInput
                placeholder="Email ID"
                value={customer.email_id}
                onChangeText={(text) => setCustomer({ ...customer, email_id: text })}
                style={styles.input}
            />
            <TextInput
                placeholder="Tél"
                value={customer.custom_phone}
                onChangeText={(text) => setCustomer({ ...customer, custom_phone: text })}
                style={styles.input}
            />

            <View style={{ marginBottom: 50 }}>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AddCustomerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.white,
    },
    input: {
        height: 60,
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
