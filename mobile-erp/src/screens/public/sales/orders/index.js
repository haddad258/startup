import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import OrderItem from './Orders'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { OrderSettings } from "../../../../service/doctype/index";
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
            const list = await OrderSettings.getorders(`?fields=["*"]&limit_page_length=10000&limit_page_length=10000`);
            if (list) {
                setList(list?.data);
                console.log(list?.data.length);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <Text>ordessrs</Text>
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
