import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ArticleCard from './ArticleIndex'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { ArticleSettings } from "../../../../service/doctype/index";
function ArticlesPurchase() {
    const [List, setList] = useState([])

    useEffect(() => {
        
        fetchArticles()
    }, [])
    useFocusEffect(
        useCallback(() => {
            fetchArticles()
            return () => {
                //nsole.log('HomeScreen is unfocused');
            };
        }, [])
    );
    const fetchArticles = async () => {
        try {
            const list = await ArticleSettings.getarticles(`?fields=["*"]&filters={"selling":0}&limit_page_length=10000`);
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
                renderItem={({ item }) => (<ArticleCard item={item} />)}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}
export default ArticlesPurchase;
