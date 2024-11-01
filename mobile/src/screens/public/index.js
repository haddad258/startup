import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "./Home";
import Articles from "./Articles";
import Services from "./Services";
import Help from "./Help";
import Orders from "./orders";
import Stocks from "./stocks";

import { LoginScreen, Private } from '../index'

import { Colors } from '../../core/theme'
import Documentations from "./Documents";

const Tab = createBottomTabNavigator();

const TabPublic = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.gray,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
            }}>

            <Tab.Screen
                options={{
                    title: "Acceuil",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    title: "Documents",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="file" color={color} size={size} />
                    ),
                }}
                name="Documentations"
                component={Documentations}
            />
            <Tab.Screen
                options={{
                    title: "Tâches",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="calendar" color={color} size={size} />
                    ),
                }}
                name="Services"
                component={Services}
            />
            <Tab.Screen
                options={{
                    title: "Help",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list-ul" color={color} size={size} />
                    ),
                }}
                name="Help"
                component={Help}
            />
            <Tab.Screen
                options={{
                    title: "Paiement",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="Stocks"
                component={Stocks}
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
                    title: "LoginScreen",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="LoginScreen"
                component={LoginScreen}
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
