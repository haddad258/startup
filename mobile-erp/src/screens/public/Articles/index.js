import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import ListArticles from "./List";
import AddArticles from "./Add.Articles";


import { Colors } from '../../../core/theme'

const Tab = createBottomTabNavigator();

const TabPublic = () => {
    return (
        <Tab.Navigator
            initialRouteName="ListArticles"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
            }}>
            <Tab.Screen
                options={{
                    title: "Liste Articles",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list" color={color} size={size} />
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

export default TabPublic;
