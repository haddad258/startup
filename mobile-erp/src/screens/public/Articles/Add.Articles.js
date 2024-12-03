import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../core/theme';
import { ArticleSettings } from '../../../service/doctype'; // Ensure this is properly configured

const AddArticleScreen = ({ navigation }) => {
    const [item, setItem] = useState({
        item_code: 'item_code',
        item_name: 'item_name',
        item_group: '000AR',
        stock_uom: 'pce',
        description: 'description'
    });

    const handleSave = async () => {
        try {
            const response = await ArticleSettings.addarticles(item);
            console.log('Article added successfully:', response);
            Alert.alert('Success', 'Article added successfully!', [
                { text: 'OK', onPress: () => navigation.goBack() },
            ]);
        } catch (error) {
            console.error('Error adding article:', error);
            Alert.alert('Error', 'Failed to add the article. Please try again.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <TextInput
                placeholder="Item Code"
                value={item.item_code}
                onChangeText={(text) => setItem({ ...item, item_code: text })}
                style={styles.input}
            />
            <TextInput
                placeholder="Item Name"
                value={item.item_name}
                onChangeText={(text) => setItem({ ...item, item_name: text })}
                style={styles.input}
            />
            <TextInput
                placeholder="Item Group"
                value={item.item_group}
                onChangeText={(text) => setItem({ ...item, item_group: text })}
                style={styles.input}
            />
            <TextInput
                placeholder="Stock UOM"
                value={item.stock_uom}
                onChangeText={(text) => setItem({ ...item, stock_uom: text })}
                style={styles.input}
            />
            <TextInput
                placeholder="Description"
                value={item.description}
                onChangeText={(text) => setItem({ ...item, description: text })}
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

export default AddArticleScreen;

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
