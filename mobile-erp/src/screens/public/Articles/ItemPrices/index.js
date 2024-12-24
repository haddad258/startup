import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import ListArticles from "./List.Item.Prices";
import AddArticles from "./Add.Item.Prices";


import { Colors } from '../../../../core/theme'

const Tab = createBottomTabNavigator();

const TabArticles = () => {
    return (
        <Tab.Navigator
            initialRouteName="ListArticles"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
                headerShown:false

            }}>
            <Tab.Screen
                options={{
                    title: "Items",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="grip-vertical" color={color} size={size} />
                    ),
                }}
                name="ListArticles"
                component={ListArticles}
            />
            <Tab.Screen
                options={{
                    title: "Ajout",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="plus" color={color} size={size} />
                    ),
                }}
                name="AddArticles"
                component={AddArticles}
            />
        

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    headerTitleStyle: {
        textAlign: "left",
    },
    logout: {
        color: Colors.primary,
        textAlign: "left",
    },
    headerStyle: {
        backgroundColor: Colors.accent,
    },
});

export default TabArticles;
