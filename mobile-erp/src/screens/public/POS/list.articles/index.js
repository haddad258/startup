import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import ArticleCard from './ArticleIndex'
import { Colors } from '../../../../core/theme';
import { useFocusEffect } from '@react-navigation/native';
import { ArticleSettings, PosAPI } from "../../../../service/doctype/index";
function Articles() {
    const [List, setList] = useState([])

    useEffect(() => {
        console.log('HomeScreen is focused');
        fetchArticles()
    }, [])
    useFocusEffect(
        useCallback(() => {
            fetchArticles()
            return () => {
                console.log('HomeScreen is unfocused');
            };
        }, [])
    );
    const fetchArticles = async () => {
        try {
            const list = await ArticleSettings.getarticles(`?fields=["*"]&limit_page_length=10000`);
            if (list) {
                setList(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    const createOrder = async () => {
        try {
            const payload = {
                "customer": "customer 1426",
                "delivery_date": "2024-12-23",
                "items": [
                    {
                        "amount": 834,
                        "item_code": "itemK",
                        "qty": 3,
                        "rate": 0
                    },
                    {
                        "amount": 280,
                        "item_code": "item 2",
                        "qty": 5,
                        "rate": 0
                    }
                ],
                "payments": [
                    {
                        "mode_of_payment": "Cash",
                        "amount": 130.0
                    }
                ],
                "set_posting_time": 1,
                "update_stock": 1,
                "is_pos": 1,
                "posting_date": "2024-12-23",
                "due_date": "2024-12-23",
            }
            const list = await PosAPI.addpos(payload);
            if (list) {
                setList(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };


    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <TouchableOpacity onPress={() => createOrder()} >
                <Text>articles</Text>
            </TouchableOpacity>
            {/* <FlatList
                data={List}
                vertical
                renderItem={({ item }) => (<ArticleCard item={item} />)}
                keyExtractor={(item) => item.name}
            /> */}
        </View>
    );
}
export default Articles;
