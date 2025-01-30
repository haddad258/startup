import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import QuotationItem from './Quotations'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { QuotationSettings } from "../../../../service/doctype/index";
function Quotations() {
    const [List, setList] = useState([])

    useEffect(() => {
        
        fetchQuotations()
      }, [])
    useFocusEffect(
        useCallback(() => {
          fetchQuotations();
          return () => {
            //nsole.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchQuotations = async () => {
        try {
            const list = await QuotationSettings.getquotations(`?fields=["*"]&limit_page_length=10000`);
            if (list) {
                setList(list?.data);
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
                renderItem={({ item }) => (<QuotationItem quotation={item} />)}
                keyExtractor={item => item.name}
            /> 
        </View>
    );
}
export default Quotations;
