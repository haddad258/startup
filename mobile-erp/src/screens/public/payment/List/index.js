import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Payments from './Payment.js'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { PaymentSettings } from "../../../../service/doctype/index";
function PaymentList() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchPayments()
      }, [])
    useFocusEffect(
        useCallback(() => {
        fetchPayments()
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchPayments = async () => {
        try {
            const list = await PaymentSettings.getpayments(`?fields=["*"]&limit_page_length=10000`);
            if (list) {
                setList(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.backgroundColor }}>
            <FlatList
                data={List}
                vertical
                renderItem={({ item }) => (<Payments item={item} />)}
                keyExtractor={item => item.name}
            />
        </View>
    );
}
export default PaymentList;
