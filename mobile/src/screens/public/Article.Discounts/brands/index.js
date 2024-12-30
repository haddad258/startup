import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors, SIZES } from "../../../../core/theme";
import { useFocusEffect } from "@react-navigation/native";
import { CommonDocTypes } from "../../../../service/common";
import Brand from "./Brand";

function Brands() {
    const [List, setList] = useState([]);

    const GetDoctype = async () => {
        try {
            const list = await CommonDocTypes.getcommonDoctypes("entity/brands");
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
            console.log("Brands is focused");
            return () => {
                console.log("Brands is unfocused");
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nos Catégories</Text>
            <Text style={styles.subText}>
                Explorez une variété de catégories pour répondre à vos besoins.
            </Text>
            <FlatList
                data={List}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Brand item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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

export default Brands;
