import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors, SIZES } from "../../../../core/theme";
import { useFocusEffect } from "@react-navigation/native";
import { SettingsArticles } from "../../../../service/doctype";
import Article from '../../Articles'
function ArticlesFilterd() {
    const [List, setList] = useState([]);

    const GetDoctype = async () => {
        try {
            const list = await SettingsArticles.getArticles();
            if (list) {
                setList(list?.data);
                console.log(list?.data);
                
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
            console.log("ArticlesFilterd is focused");
            return () => {
                console.log("ArticlesFilterd is unfocused");
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nos Articles Categories</Text>
            <Text style={styles.subText}>
                description Categoris
            </Text>
            <FlatList
                data={List}
                vertical
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Article Article={item} />}
                keyExtractor={(item) => item.name}
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
    },
    subText: {
        fontSize: SIZES.body4,
        color: Colors.gray,
        marginBottom: 5,
    },
    flatListContainer: {
        paddingVertical: 5,
    },
});

export default ArticlesFilterd;
