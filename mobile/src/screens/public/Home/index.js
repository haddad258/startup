
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DataAppsConfig from './DataAppsConfig';
import ArticlesFiltred from './ArticlesFiltred';
import { StyleSheet } from "react-native";
import { Colors } from "../../../core/theme";

const Stack = createStackNavigator();

const TabPrivate = () => {
  return (
    <Stack.Navigator
      id="DataAppsConfig"
      initialRouteName="DataAppsConfig"
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        headerShown: false,
        headerBackVisible: false

      }}
    >
  
    
      <Stack.Screen
        name="DataAppsConfig"
        component={DataAppsConfig}
        options={{
          title: "DataAppsConfig",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
        <Stack.Screen
        name="ArticlesFiltred"
        component={ArticlesFiltred}
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
