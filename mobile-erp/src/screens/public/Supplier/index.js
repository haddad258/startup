import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Suppliers from './Supplier'
import { Colors } from "../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { SupplierSettings } from "../../../service/doctype/index";
function SupplierList() {
    const [List, setList] = useState([])

    useEffect(() => {
        
        fetchSuppliers()
      }, [])
    useFocusEffect(
        useCallback(() => {
        fetchSuppliers()
          
          return () => {
            //nsole.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchSuppliers = async () => {
        try {
            const list = await SupplierSettings.getsuppliers(`?fields=["*"]&limit_page_length=10000`);
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
                renderItem={({ item }) => (<Suppliers item={item} />)}
                keyExtractor={item => item.name}
            />
        </View>
    );
}
export default SupplierList;
