
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from './Register';
import LoginScreen from '../Login'
import { StyleSheet } from "react-native";
import { Colors } from "../../core/theme"

const Stack = createStackNavigator();

const TabPrivate = () => {
  return (
    <Stack.Navigator
      id="PrivateCustomers"
      initialRouteName="Register"
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        headerShown: false,
        headerBackVisible: false

      }}
    >
  
    
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: "Register",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "Create account",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    textAlign: "left",
  },
  logout: {
    color: Colors,
    textAlign: "left",
  },
});

export default TabPrivate;
