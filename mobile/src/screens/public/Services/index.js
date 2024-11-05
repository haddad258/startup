


import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Documentations from './add.tasks'

import Rapports from './rapport'
import { Colors } from '../../../core/theme'
import DocumentationsScreens from "./List.tasks";
import AddTask from './Ajout.Budget'

const Tab = createBottomTabNavigator();

const TabPublic = () => {
    return (
        <Tab.Navigator
            initialRouteName="HelpIndex"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
            }}>

            <Tab.Screen
                options={{
                    title: "à faire",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="clipboard-list" color={color} size={size} />
                    ),
                }}
                name="Taskss"
                component={Documentations}
            />
               <Tab.Screen
                options={{
                    title: "rapport",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="chart-bar" color={color} size={size} />
                    ),
                }}
                name="rapport"
                component={Rapports}
            />
            <Tab.Screen
                options={{
                    title: "Budget",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="retweet" color={color} size={size} />
                    ),
                }}
                name="Taskia"
                component={DocumentationsScreens}
            />
          
          <Tab.Screen
                options={{
                    title: "Configuration",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="search-plus" color={color} size={size} />
                    ),
                }}
                name="AddTask"
                component={AddTask}
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

