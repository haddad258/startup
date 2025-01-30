import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ArticleCard from './ArticleIndex'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { StockArticlesWarhouse } from "../../../../service/doctype/index";
function Articles() {
    const [List, setList] = useState([])

    useEffect(() => {
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
            const list = await StockArticlesWarhouse.getarticlesOnStock(`?doctype=Bin&fields=["*"]&filters=[["actual_qty", ">", 30]]`);
            console.log(list)
            if (list) {
                setList(list?.message);
                console.log(list?.message?.length);
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
                renderItem={({ item }) => (<ArticleCard item={item} />)}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}
export default Articles;
