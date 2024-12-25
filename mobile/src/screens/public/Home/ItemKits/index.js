import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors, SIZES } from "../../../../core/theme";
import { useFocusEffect } from "@react-navigation/native";
import { CommonDocTypes } from "../../../../service/common";
import ItemKit from "./ItemKit";

function ItemKits() {
    const [List, setList] = useState([]);

    const GetDoctype = async () => {
        try {
            const list = await CommonDocTypes.getcommonDoctypes("entity/itemkits");
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
            console.log("ItemKits is focused");
            return () => {
                console.log("ItemKits is unfocused");
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nos ItemKits</Text>
            <Text style={styles.subText}>
                Explorez une variété de ItemKits pour répondre à vos besoins.
            </Text>
            <FlatList
                data={List}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <ItemKit item={item} />}
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

export default ItemKits;
