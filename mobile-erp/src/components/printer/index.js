import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import * as Print from 'expo-print';
import { returnhtml } from './view.print';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../../core/theme';



function PrintOrder({ orderDetail }) {
    const createAndPrintPDF = async () => {
        const htmlRender = returnhtml(
            orderDetail.total || 0, // Default to 0 if total is undefined
            orderDetail.status || "Unknown", // Default to "Unknown" if status is undefined
            orderDetail.customer || "Anonymous", // Default to "Anonymous" if customer is undefined
            orderDetail.items || [] // Default to an empty array if items is undefined
        );
        try {
            const printOptions = {
                html: htmlRender,
            };
            const printResult = await Print.printAsync(printOptions);

            if (printResult) {

            } else {

            }
        } catch (error) {
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btnPrint}
                onPress={() => createAndPrintPDF()}
            >
                <FontAwesome name="print" color="white" size={20} />
                <Text style={styles.printText}>Imprimer</Text>
            </TouchableOpacity>


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    btnPrint: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4CAF50",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    printText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
    },
    spacer: {
        height: 8,
    },
    printer: {
        textAlign: 'center',
        fontWeight: "600",
        color: Colors.white,
        fontSize: 15
    },
});
export default PrintOrder;
