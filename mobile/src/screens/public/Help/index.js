import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HelpIndex from './index.helps'
import HelpVideo from './index.video'


import { Colors } from '../../../core/theme'

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
                    title: "Formations",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="arrows-alt" color={color} size={size} />
                    ),
                }}
                name="HelpIndex"
                component={HelpIndex}
            />
            <Tab.Screen
                options={{
                    title: "Example de formation",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list-ol" color={color} size={size} />
                    ),
                }}
                name="HelpVideo"
                component={HelpVideo}
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
