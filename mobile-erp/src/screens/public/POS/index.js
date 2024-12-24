import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import PosDetails from "./list.articles";
import OrdersPos from "./list.orders.pos";
import CartPosScreen from './Cart.Pos'
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
                headerShown:false
            }}>
        
            <Tab.Screen
                options={{
                    title: "POS articles",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="PosDetails"
                component={PosDetails}
            />
                <Tab.Screen
                options={{
                    title: "Orders Pos",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="history" color={color} size={size} />
                    ),
                }}
                name="OrdersPos"
                component={OrdersPos}
            />
                <Tab.Screen
                options={{
                    title: "Checkout",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="level-up-alt" color={color} size={size} />
                    ),
                }}
                name="CartPosScreen"
                component={CartPosScreen}
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
