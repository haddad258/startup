import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from './Plan'
import { Colors } from "../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
function Esim() {
    const [List, setList] = useState([0,1,2,3,4,5,6])

    useEffect(() => {
        console.log('HomeScreen is focused');
      }, [])
    useFocusEffect(
        useCallback(() => {
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
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
