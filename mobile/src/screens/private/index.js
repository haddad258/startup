import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Documentations from './Page'
import Page2 from './Pages'
// import PaChart from './chart'
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
                    title: "Recomondations",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="watchman-monitoring" color={color} size={size} />
                    ),
                }}
                name="DataView"
                component={DataView}
            />
             <Tab.Screen
                options={{
                    title: "indicateurs de performance",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="bookmark" color={color} size={size} />
                    ),
                }}
                name="Documentations"
                component={Documentations}
            />
                <Tab.Screen
                options={{
                    title: "KPI productions",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="newspaper" color={color} size={size} />
                    ),
                }}
                name="Pages"
                component={Page2}
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

