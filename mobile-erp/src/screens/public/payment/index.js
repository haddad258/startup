import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import PurchasInvoices from "./Purchase.Invoices";
import PurchaseOrders from './Purchase.order'
import ArticlesPurchase from '../Articles/Articles.Purchase'
import CartScreenPurchase from './Cart'
import { Colors } from '../../../core/theme'

const Tab = createBottomTabNavigator();

const Sales = () => {
    return (
        <Tab.Navigator
            initialRouteName="ArticlesPurchase"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
                headerShown: false
            }}>
            <Tab.Screen
                options={{
                    title: "Prix Achat",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="ArticlesPurchase"
                component={ArticlesPurchase}
            />
            <Tab.Screen
                options={{
                    title: "cart Achat",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="CartScreenPurchase"
                component={CartScreenPurchase}
            />

            <Tab.Screen
                options={{
                    title: "Factures d'achat",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="PurchasInvoices"
                component={PurchasInvoices}
            />
            <Tab.Screen
                options={{
                    title: "Bons de commande",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="PurchaseOrders"
                component={PurchaseOrders}
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

export default Sales;
