import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import ListCustomers from "./List";
import AddCustomerScreen from "./Add.Customers";


import { Colors } from '../../../core/theme'

const Tab = createBottomTabNavigator();

const Sales = () => {
    return (
        <Tab.Navigator
            initialRouteName="ListCustomers"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
                headerShown: false,

            }}>
            <Tab.Screen
                options={{
                    title: "ListCustomers",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list" color={color} size={size} />
                    ),
                }}
                name="ListCustomers"
                component={ListCustomers}
            />
            <Tab.Screen
                options={{
                    title: "AddCustomerScreen",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="plus" color={color} size={size} />
                    ),
                }}
                name="AddCustomerScreen"
                component={AddCustomerScreen}
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
