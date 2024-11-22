import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from './Plan'
import { Colors } from "../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { CustomerSettings } from "../../../service/doctype/index";
function Esim() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchCustomers()
      }, [])
    useFocusEffect(
        useCallback(() => {
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchCustomers = async () => {
        try {
            const list = await CustomerSettings.getcustomers(`?fields=["*"]`);
            if (list) {
                setList(list?.data);
                console.log(list?.data[0]);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.backgroundColor }}>
            <FlatList
                data={List}
                numColumns={2}
                vertical
                renderItem={({ item }) => (<Item item={item} />)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
export default Esim;
