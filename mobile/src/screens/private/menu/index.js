import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "./Home";
import OrderScreen from "./orders";
import Info from './info'
import CartScreen from "./Cart";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions,View } from "react-native";
import { Colors } from '../../../core/theme'
const { width, height } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

const TabUsersAccount = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                tabBarActiveTintColor: Colors.info,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: { backgroundColor: Colors.white },
                headerStyle: styles.headerStyle,

            }}>

            <Tab.Screen
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    title: "Info",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="Info"
                component={Info}
            />
            <Tab.Screen
                options={{
                    title: "OrderScreen",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="OrderScreen"
                component={OrderScreen}
            />
            <Tab.Screen
                options={{
                    title: "CartScreen",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
                name="CartScreen"
                component={CartScreen}
            />

            <Tab.Screen
                name="AddScreen"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View
                            style={{
                                backgroundColor: "#27C5B2",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: width * 0.12, // 12% of screen width
                                margin: -height * 0.02, // -2% of screen height
                                padding: width * 0.03, // 3% of screen width
                                elevation: 5,
                            }}
                        >
                            <AntDesign name="plus" size={size} color="#fff" />
                        </View>
                    ),
                    tabBarLabelStyle: { display: "none" },
                }}
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

export default TabUsersAccount;
