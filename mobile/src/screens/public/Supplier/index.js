import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Suppliers from './Supplier'
import { Colors } from "../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { SupplierSettings } from "../../../service/doctype/index";
function supplierList() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchSuppliers()
      }, [])
    useFocusEffect(
        useCallback(() => {
        fetchSuppliers()
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
      const fetchSuppliers = async () => {
        try {
            const list = await SupplierSettings.getsuppliers(`?fields=["*"]`);
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
                renderItem={({ item }) => (<Suppliers item={item} />)}
                keyExtractor={item => item.name}
            />
        </View>
    );
}
export default supplierList;
