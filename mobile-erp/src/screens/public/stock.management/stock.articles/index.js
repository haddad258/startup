import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ArticleCard from './ArticleIndex'
import { Colors } from "../../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
import { ArticleSettings, StockArticlesWarhouse } from "../../../../service/doctype/index";
function Articles() {
    const [List, setList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    useFocusEffect(
        useCallback(() => {
            fetchData()
            return () => {
                //nsole.log('HomeScreen is unfocused');
            };
        }, [])
    );
    const fetchArticles = async () => {
        try {
            const list = await StockArticlesWarhouse.getarticlesOnStock(`?doctype=Bin&fields=["*"]`);
            return list?.message || [];
        } catch (error) {
            console.error('Error fetching articles:', error);
            return [];
        }
    };
    
    const fetchArticlesPrices = async () => {
        try {
            const list = await StockArticlesWarhouse.getarticlesPrices(`?fields=["*"]&filters={"selling":1}&limit_page_length=10000`);
            return list?.data || [];
        } catch (error) {
            console.error('Error fetching articles prices:', error);
            return [];
        }
    };
    
    // Exécution en parallèle
    const fetchData = async () => {
        try {
            const [articles, prices] = await Promise.all([fetchArticles(), fetchArticlesPrices()]);
            console.log('Articles:', articles);
            console.log('Prices:', prices);
            const itemsWithPrices = articles.map(item => {
                const info = prices.find(p => p.item_code === item.item_code);
                return {
                    ...item,
                    info: info // Ajout de l'information de prix, ou null si aucune correspondance
                };
            });
            setList(itemsWithPrices);
             console.log("itemsWithPrices,",itemsWithPrices);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // const fetchArticlesPrices = async () => {
    //     try {
    //         const formData = new FormData();
    //         formData.append("txt", ""); // Valeur vide pour `txt`
    //         formData.append("doctype", "Item");
    //         formData.append("ignore_user_permissions", "0");
    //         formData.append("reference_doctype", "Sales Order Item");
    //         formData.append("page_length", "10");
            // formData.append("fields", JSON.stringify(["*"])); // Convertir en JSON
    //         formData.append("query", "erpnext.controllers.queries.item_query");
    //         const list = await StockArticlesWarhouse.filterArticlesOnStock(formData);
    //         if (list) {
    //             console.log(list?.message);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching admin list:', error);
    //     }
    // };
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
