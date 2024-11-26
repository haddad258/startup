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
            const list = await PaymentSettings.getpayments(`?fields=["*"]`);
            if (list) {
                setList(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.white }}>
            <FlatList
                data={List}
                numColumns={2}
                vertical
                renderItem={({ item }) => (<Payments item={item} />)}
                keyExtractor={item => item.name}
            />
        </View>
    );
}
export default PaymentList;
