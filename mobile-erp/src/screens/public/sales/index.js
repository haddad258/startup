import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Orders from "./orders";
import Invoices from "./invoices";
import ListPayment from './List'

import { Colors } from '../../../core/theme'
import Quotations from "./Quotation";

const Tab = createBottomTabNavigator();

const Sales = () => {
    return (
        <Tab.Navigator
            initialRouteName="Orders"
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
                    title: "Commandes",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="file-alt" color={color} size={size} />
                    ),
                }}
                name="Orders"
                component={Orders}
            />
            <Tab.Screen
                options={{
                    title: "Factures",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="Invoices"
                component={Invoices}
            />
            <Tab.Screen
                options={{
                    title: "Paiements",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list" color={color} size={size} />
                    ),
                }}
                name="ListPayment"
                component={ListPayment}
            />
            <Tab.Screen
                options={{
                    title: "Devis",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="equals" color={color} size={size} />
                    ),
                }}
                name="Quotations"
                component={Quotations}
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
