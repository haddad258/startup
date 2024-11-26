import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import InvoiceItem from './Invoices'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { PurchaseInvoiceSettings } from "../../../../service/doctype/index";
function Invoices() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchInvoices()
      }, [])
    useFocusEffect(
        useCallback(() => {
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchInvoices = async () => {
        try {
            const list = await PurchaseInvoiceSettings.getpurchaseInvoces(`?fields=["*"]`);
            if (list) {
                setList(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <Text>invoces</Text>
             <FlatList
                data={List}
                vertical
                renderItem={({ item }) => (<InvoiceItem item={item} />)}
                keyExtractor={item => item.name}
            /> 
        </View>
    );
}
export default Invoices;
