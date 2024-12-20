import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "./Home";
import Articles from "./Articles";
import Warehouses from "./warehouse/index";
import Customers from './Customers'
import SupplierList from './Supplier'
import Sales from './sales'
import PaymentList from './payment'
import CartScreen from './Cart'

import { Colors } from "../../core/theme";




const Tab = createBottomTabNavigator();

const TabPublic = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,

            }}>
            <Tab.Screen
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    title: "Customers",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user" color={color} size={size} />
                    ),
                }}
                name="Customers"
                component={Customers}
            />
            <Tab.Screen
                options={{
                    title: "CartScreen",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="cart-plus" color={color} size={size} />
                    ),
                }}
                name="CartScreen"
                component={CartScreen}
            />



            <Tab.Screen
                options={{
                    title: "Articles",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="dolly-flatbed" color={color} size={size} />
                    ),
                }}
                name="Articles"
                component={Articles}
            />
            <Tab.Screen
                options={{
                    title: "Fournisseurs",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="id-card" color={color} size={size} />
                    ),
                }}
                name="SupplierList"
                component={SupplierList}
            />
            <Tab.Screen
                options={{
                    title: "Sales",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="stream" color={color} size={size} />
                    ),
                }}
                name="Sales"
                component={Sales}
            />
            <Tab.Screen
                options={{
                    title: "PaymentList",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="money-bill" color={color} size={size} />
                    ),
                }}
                name="PaymentList"
                component={PaymentList}
            />

            <Tab.Screen
                options={{
                    title: "Warehouses",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="store" color={color} size={size} />
                    ),
                }}
                name="Warehouses"
                component={Warehouses}
            />
            {/*  <Tab.Screen
                options={{
                    title: "Help",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="Help"
                component={Help}
            />
            <Tab.Screen
                options={{
                    title: "Private",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="Private"
                component={Private}
            />
            <Tab.Screen
                options={{
                    title: "Orders",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="Orders"
                component={Orders}
            />

            <Tab.Screen
                options={{
                    title: "Stocks",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="Stocks"
                component={Stocks}
            />
            <Tab.Screen
                options={{
                    title: "LoginScreen",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="LoginScreen"
                component={LoginScreen}
            />
 */}







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
