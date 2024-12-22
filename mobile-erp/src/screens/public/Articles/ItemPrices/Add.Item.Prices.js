import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../../core/theme';
import { ArticleSettings } from '../../../../service/doctype'; // Ensure this is properly configured
import TextInputDoc from '../../../../components/Doctype/TextInputDoc';
import SelectInputDocs from '../../../../components/Doctype/SelectInputDocs';

const AddArticleScreen = ({ navigation }) => {
    const [item, setItem] = useState({
        item_code: '',
        item_name: '',
        item_group: '',
        stock_uom: '',
        description: ''
    });

    const handleSave = async () => {
        try {
            const response = await ArticleSettings.addarticlesInfo(item);
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
            <TextInputDoc
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
            <SelectInputDocs
                placeholder="Item Group"
                value={item.item_group}
                onChangeText={(option) => setItem({ ...item, item_group: option.name })}
                style={styles.input}
                doctype={"Item Group"}
            />
            <SelectInputDocs
                placeholder="Stock UOM"
                value={item.stock_uom}
                onChangeText={(option) => setItem({ ...item, stock_uom: option.name })}
                style={styles.input}
                doctype={"UOM"}

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
