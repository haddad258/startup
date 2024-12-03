import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import WarhouseList from "./List";
import DeliveryNotesList from "./DeliveryNote";
import StockEntryList from "./StockEntry";
import DataProduct from './Test'

import { Colors } from '../../../core/theme'

const Tab = createBottomTabNavigator();

const Warehouses = () => {
    return (
        <Tab.Navigator
            initialRouteName="WarhouseList"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,
            }}>
            <Tab.Screen
                options={{
                    title: "WarhouseList",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list" color={color} size={size} />
                    ),
                }}
                name="WarhouseList"
                component={WarhouseList}
            />
            <Tab.Screen
                options={{
                    title: "DeliveryNotesList",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="file-contract" color={color} size={size} />
                    ),
                }}
                name="DeliveryNotesList"
                component={DeliveryNotesList}
            />
              <Tab.Screen
                options={{
                    title: "StockEntryList",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="caret-square-left" color={color} size={size} />
                    ),
                }}
                name="StockEntryList"
                component={StockEntryList}
            />
                 <Tab.Screen
                options={{
                    title: "DataProduct",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="caret-square-left" color={color} size={size} />
                    ),
                }}
                name="DataProduct"
                component={DataProduct}
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

export default Warehouses;
