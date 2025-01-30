import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Modal,
    Text,
    FlatList,
} from 'react-native';
import { CommonDocTypes } from '../../service/common';

const SelectInputDocs = ({ placeholder, value, onChangeText, style, doctype }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [List, setList] = useState([])
    const handleOptionSelect = (option) => {
        onChangeText(option);
        setModalVisible(false);
    };
    const GetDoctype = async () => {

        try {
            const list = await CommonDocTypes.getcommonDoctypes(doctype + `?fields=["*"]&limit_page_length=10000`);
            if (list) {
                setList(list?.data);
                setModalVisible(true);

            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => GetDoctype()}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    editable={false} // Makes the input non-editable
                    style={[styles.input, style]}
                />
            </TouchableOpacity>

            {/* Modal for selecting options */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select an Option</Text>
                        <FlatList
                            data={List}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => handleOptionSelect(item)}
                                >
                                    <Text style={styles.optionText}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SelectInputDocs;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    input: {
        height: 60,
        width: '100%',
        borderColor: '#3559E0', // Secondary color from your palette
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: '#fff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    option: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 16,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#3559E0',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
