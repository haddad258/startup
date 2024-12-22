import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Warehouses from './warehouse'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { WarehouseSettings } from "../../../../service/doctype/index";
function WarehousesList() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchWarehouses()
      }, [])
    useFocusEffect(
        useCallback(() => {
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchWarehouses = async () => {
        try {
            const list = await WarehouseSettings.getwarehouses(`?fields=["*"]&limit_page_length=10000`);
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
                numColumns={2}
                vertical
                renderItem={({ item }) => (<Warehouses item={item} />)}
                keyExtractor={item => item.name}
            />
        </View>
    );
}
export default WarehousesList;
