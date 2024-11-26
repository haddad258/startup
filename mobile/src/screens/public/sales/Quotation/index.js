import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import QuotationItem from './Quotations'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { QuotationSettings } from "../../../../service/doctype/index";
function Quotations() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchQuotations()
      }, [])
    useFocusEffect(
        useCallback(() => {
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchQuotations = async () => {
        try {
            const list = await QuotationSettings.getquotations(`?fields=["*"]`);
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
                renderItem={({ item }) => (<QuotationItem quotation={item} />)}
                keyExtractor={item => item.name}
            /> 
        </View>
    );
}
export default Quotations;
