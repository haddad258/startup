import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import StockArticles from './stock.articles'
import StockCarts from './stock.cart'
import StockOffline from './stock.offline'
import StockSales from './stock.sales'
import Customers from '../Customers'
import Dashboard from './stock.dashboard'
import SyncModeModal from "../../../components/icon.sync";
import { TransitionPresets } from '@react-navigation/stack'; // Import transition presets

import { Colors } from '../../../core/theme'

const Tab = createBottomTabNavigator();

const StockManagement = () => {
    return (
        <Tab.Navigator
            initialRouteName="DashboardStock"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
                tabBarLabelStyle: { fontSize: 10 },
                tabBarStyle: {
                    backgroundColor: Colors.white,
                    borderTopWidth: 1,
                    elevation: 0,
                },
                // Apply a transition preset for screen changes
                ...TransitionPresets.SlideFromRightIOS, // Use the SlideFromRightIOS transition
                headerRight: () => (
                    <SyncModeModal />
                ),
            }}
        >
            <Tab.Screen
                options={{
                    title: "Dashboard",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="DashboardStock"
                component={Dashboard}
            />
            <Tab.Screen
                options={{
                    title: "Clients",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-alt" color={color} size={size} />
                    ),
                }}
                name="CustomerStock"
                component={Customers}
            />
            <Tab.Screen
                options={{
                    title: "Stock",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="store" color={color} size={size} />
                    ),
                }}
                name="StockArticles"
                component={StockArticles}
            />
            <Tab.Screen
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="shopping-cart" color={color} size={size} />
                    ),
                }}
                name="StockCarts"
                component={StockCarts}
            />

            <Tab.Screen
                options={{
                    title: "ventes",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="file-alt" color={color} size={size} />
                    ),
                }}
                name="StockSales"
                component={StockSales}
            />

            <Tab.Screen
                options={{
                    title: "StockOffline",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="file-alt" color={color} size={size} />
                    ),
                }}
                name="StockOffline"
                component={StockOffline}
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

export default StockManagement;
