import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import HomeScreen from "./Home";
import Articles from "./Articles";
import Warehouses from "./warehouse/index";
import Customers from './Customers';
import SupplierList from './Supplier';
import Sales from './sales';
import PaymentList from './payment';
import CartScreen from './Cart';
import PosConfig from './POS';
import StockManagement from './stock.management'
import { Colors } from "../../core/theme";
import { TransitionPresets } from '@react-navigation/stack'; // Import transition presets
import SyncModeModal from "../../components/icon.sync";
import {modeApp} from '../../service/Api/config'
const Tab = createBottomTabNavigator();

const TabPublic = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle,
        tabBarActiveTintColor: Colors.info,
        tabBarInactiveTintColor: Colors.secondary,
        tabBarStyle: { backgroundColor: Colors.white },
        headerStyle: styles.headerStyle,
        tabBarLabelStyle: { fontSize: 10 },
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 1,
          elevation: 0,
        },
        // Apply a transition preset for screen changes
        ...TransitionPresets.SlideFromRightIOS, // Use the SlideFromRightIOS transition
        headerRight: () => (
          <SyncModeModal />
        ),
      }}
    >
      { modeApp ==="stock" && <Tab.Screen
        options={{
          title: "Acceuil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />}
       { modeApp ==="stock" && <Tab.Screen
        options={{
          title: "Clients",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
        name="Customers"
        component={Customers}
      />}
       { modeProd==="prod" && <Tab.Screen
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cart-plus" color={color} size={size} />
          ),
        }}
        name="CartScreen"
        component={CartScreen}
      />}
       { modeProd==="prod" && <Tab.Screen
        options={{
          title: "Articles",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dolly-flatbed" color={color} size={size} />
          ),
        }}
        name="Articles"
        component={Articles}
      />}
       { modeProd==="prod" && <Tab.Screen
        options={{
          title: "Ventes",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="stream" color={color} size={size} />
          ),
        }}
        name="Sales"
        component={Sales}
      />}
       { modeProd==="prod" && <Tab.Screen
        options={{
          title: "POS",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tablet-alt" color={color} size={size} />
          ),
        }}
        name="PosConfig"
        component={PosConfig}
      />}
       { modeProd==="prod" && <Tab.Screen
        options={{
          title: "Fournisseurs",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="id-card" color={color} size={size} />
          ),
        }}
        name="SupplierList"
        component={SupplierList}
      />}
       { modeProd==="prod" && <Tab.Screen
        options={{
          title: "PaymentList",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="money-bill" color={color} size={size} />
          ),
        }}
        name="PaymentList"
        component={PaymentList}
      />}
       { modeProd==="prod" && <Tab.Screen
        options={{
          title: "Warehouses",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="warehouse" color={color} size={size} />
          ),
        }}
        name="Warehouses"
        component={Warehouses}
      />}

       { modeApp ==="stock" && <Tab.Screen
        options={{
          title: "StockManagement",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="warehouse" color={color} size={size} />
          ),
        }}
        name="StockManagement"
        component={StockManagement}
      />}
    </Tab.Navigator>
  );
};

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
  iconContainer: {
    marginLeft: 15,
    marginRight: 15
  },
});

export default TabPublic;
