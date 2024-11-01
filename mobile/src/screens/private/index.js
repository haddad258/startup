import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Documentations from './Page'
import Page2 from './Pages'
import PaChart from './chart'
import DataView from './Info'


import { Colors } from "../../core/theme";
const Tab = createBottomTabNavigator();

const TabPublic = () => {
    return (
        <Tab.Navigator
            initialRouteName="DataView"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
            }}>
            <Tab.Screen
                options={{
                    title: "DataView",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="bookmark" color={color} size={size} />
                    ),
                }}
                name="DataView"
                component={DataView}
            />
            <Tab.Screen
                options={{
                    title: "Chart1",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="book-open" color={color} size={size} />
                    ),
                }}
                name="Chart1"
                component={Documentations}
            />
            <Tab.Screen
                options={{
                    title: "Page2",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="bookmark" color={color} size={size} />
                    ),
                }}
                name="Page2"
                component={Page2}
            />
            <Tab.Screen
                options={{
                    title: "PaChart",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="bookmark" color={color} size={size} />
                    ),
                }}
                name="PaChart"
                component={PaChart}
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
        backgroundColor: Colors.gray,
    },
});

export default TabPublic;

