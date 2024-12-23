import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import PosDetails from "./list.articles";
import OrdersPos from "./list.orders.pos";
import { Colors } from '../../../core/theme'

const Tab = createBottomTabNavigator();

const PosConfig = () => {
    return (
        <Tab.Navigator
            initialRouteName="PosOffline"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
            }}>
        
            <Tab.Screen
                options={{
                    title: "PosDetails",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="PosDetails"
                component={PosDetails}
            />
                <Tab.Screen
                options={{
                    title: "OrdersPos",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list" color={color} size={size} />
                    ),
                }}
                name="OrdersPos"
                component={OrdersPos}
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

export default PosConfig;
