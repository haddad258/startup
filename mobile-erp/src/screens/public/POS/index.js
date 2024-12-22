import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import PosOffline from "./list.articles";
import PosOnline from "./list.articles";
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
                    title: "PosOffline",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="th-large" color={color} size={size} />
                    ),
                }}
                name="PosOffline"
                component={PosOffline}
            />
                <Tab.Screen
                options={{
                    title: "PosOnline",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list" color={color} size={size} />
                    ),
                }}
                name="PosOnline"
                component={PosOnline}
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
