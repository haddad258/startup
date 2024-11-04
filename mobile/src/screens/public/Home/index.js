


import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Documentations from './Services'


import { Colors } from '../../../core/theme'
import DocumentationsScreens from "./View4/index";

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
                    title: "Projets",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="book-open" color={color} size={size} />
                    ),
                }}
                name="Documentations"
                component={Documentations}
            />
            <Tab.Screen
                options={{
                    title: "Ajout",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="plus" color={color} size={size} />
                    ),
                }}
                name="Documentations2"
                component={DocumentationsScreens}
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

