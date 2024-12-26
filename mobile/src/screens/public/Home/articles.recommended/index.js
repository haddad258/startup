import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors, SIZES } from "../../../../core/theme";
import { useFocusEffect } from "@react-navigation/native";
import Article from "../../Articles";
import { SettingsArticles } from "../../../../service/doctype";

function ArticleRecommends() {
    const [List, setList] = useState([]);

    const GetDoctype = async () => {
        try {
            const list = await SettingsArticles.getArticlesRecommended();
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
            console.log("ArticleRecommends is focused");
            return () => {
                console.log("ArticleRecommends is unfocused");
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nos recommend</Text>
            <Text style={styles.subText}>
                Explorez une variété de recommend pour répondre à vos besoins.
            </Text>
            <FlatList
                data={List}
                horizontal
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
        paddingHorizontal: 14,
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

export default ArticleRecommends;
