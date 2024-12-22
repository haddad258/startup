import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DeliveryNote from './Delivery.Note'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { DeliveryNoteSettings } from "../../../../service/doctype/index";
function DeliveryNotesList() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('DeliveryNotesList is focused');
        fetchDeliveryNotes()
      }, [])
    useFocusEffect(
        useCallback(() => {
            fetchDeliveryNotes()
          return () => {
            console.log('DeliveryNotesList is unfocused');
          };
        }, [])
      );
      const fetchDeliveryNotes = async () => {
        try {
            const list = await DeliveryNoteSettings.getdeliverynotes(`?fields=["*"]&limit_page_length=10000`);
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
                renderItem={({ item }) => (<DeliveryNote item={item} />)}
                keyExtractor={item => item.name}
            />
        </View>
    );
}
export default DeliveryNotesList;
