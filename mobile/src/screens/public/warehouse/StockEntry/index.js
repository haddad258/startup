import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import EntryStock from './EntryStock'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { StockEntrySettings } from "../../../../service/doctype/index";
function EntryStockList() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchEntryStock()
      }, [])
    useFocusEffect(
        useCallback(() => {
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchEntryStock = async () => {
        try {
            const list = await StockEntrySettings.getstockEntry(`?fields=["*"]`);
            if (list) {
                setList(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    return (
        <View style={{ flex: 1,  backgroundColor: Colors.white }}>
            <FlatList
                data={List}
                vertical
                renderItem={({ item }) => (<EntryStock item={item} />)}
                keyExtractor={item => item.name}
            />
        </View>
    );
}
export default EntryStockList;
