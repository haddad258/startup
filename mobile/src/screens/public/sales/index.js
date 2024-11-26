import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Orders from "./invoices";
import Invoices from "./orders";


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
            }}>
            <Tab.Screen
                options={{
                    title: "Orders",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list" color={color} size={size} />
                    ),
                }}
                name="Orders"
                component={Orders}
            />
            <Tab.Screen
                options={{
                    title: "Invoices",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="Invoices"
                component={Invoices}
            />
              <Tab.Screen
                options={{
                    title: "Quotations",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
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
