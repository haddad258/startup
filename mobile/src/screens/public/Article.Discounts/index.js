import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors, SIZES } from "../../../core/theme";
import { useFocusEffect } from "@react-navigation/native";
import Article from "../Articles";
import { SettingsArticles } from "../../../service/doctype";
import Brands from "./brands";

function ArticleDiscounts() {
    const [List, setList] = useState([]);

    const GetDoctype = async () => {
        try {
            const list = await SettingsArticles.getArticlesDiscounted();
            if (list) {
                setList(list?.data);
                
            }
        } catch (error) {
            console.error("Error fetching admin list:", error);
        }
    };

    useEffect(() => {
        GetDoctype();
    }, []);

    useFocusEffect(
        useCallback(() => {
            GetDoctype();
            console.log("ArticleDiscounts is focused");
            return () => {
                console.log("ArticleDiscounts is unfocused");
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <Brands />
            <Text style={styles.header}>Nos Discount</Text>
            <Text style={styles.subText}>
                Explorez une variété de Discount pour répondre à vos besoins.
            </Text>
            <FlatList
                data={List}
                vertical
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Article Article={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    header: {
        fontSize: SIZES.body3,
        fontWeight: "bold",
        color: Colors.primary,
        paddingHorizontal:15
    },
    subText: {
        fontSize: SIZES.body4,
        color: Colors.gray,
        marginBottom: 5,
        paddingHorizontal:15

    },
    flatListContainer: {
        paddingVertical: 5,
    },
});

export default ArticleDiscounts;
