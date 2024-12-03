import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import OrderItem from './Order'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { PurchaseOrderSettings } from "../../../../service/doctype/index";
function PurchaseOrders() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchOrders()
      }, [])
    useFocusEffect(
        useCallback(() => {
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchOrders = async () => {
        try {
            const list = await PurchaseOrderSettings.getpurchaseOrders(`?fields=["*"]`);
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
                renderItem={({ item }) => (<OrderItem item={item} />)}
                keyExtractor={item => item.name}
            /> 
        </View>
    );
}
export default PurchaseOrders;
