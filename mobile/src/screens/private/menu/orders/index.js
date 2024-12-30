import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import OrderItem from './Orders'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { OrderCustomerSettings } from "../../../../service/doctype/index";
function Orders() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchOrders()
      }, [])
    useFocusEffect(
        useCallback(() => {
          console.log('HomeScreen is focused');
          fetchOrders()
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchOrders = async () => {
        try {
            const list = await OrderCustomerSettings.getOrderCustomer(`?fields=["*"]&limit_page_length=10000`);
            if (list) {
                setList(list?.data.reverse());
                console.log("list?.data");
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
           <FlatList
                data={List}
                vertical
                renderItem={({ item }) => (<OrderItem item={item} />)}
                keyExtractor={item => item.name}
            /> 
        </View>
    );
}
export default Orders;
