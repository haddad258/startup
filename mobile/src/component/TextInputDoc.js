import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextInputDoc = ({ placeholder, value, onChangeText, style, error }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={[styles.input, style, error ? styles.errorInput : null]}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

export default TextInputDoc;

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
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
});
