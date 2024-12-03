import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import ListPayment from "./List";
import PurchasInvoices from "./Purchase.Invoices";
import PurchaseOrders from './Purchase.order'

import { Colors } from '../../../core/theme'

const Tab = createBottomTabNavigator();

const Sales = () => {
    return (
        <Tab.Navigator
            initialRouteName="ListPayment"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
            }}>
            <Tab.Screen
                options={{
                    title: "ListPayment",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list" color={color} size={size} />
                    ),
                }}
                name="ListPayment"
                component={ListPayment}
            />
            <Tab.Screen
                options={{
                    title: "PurchasInvoices",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="PurchasInvoices"
                component={PurchasInvoices}
            />
                 <Tab.Screen
                options={{
                    title: "PurchaseOrders",
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
