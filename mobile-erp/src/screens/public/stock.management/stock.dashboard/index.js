import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Dashboard from "./Home";
import { useFocusEffect } from '@react-navigation/native';
import { Colors } from '../../../../core/theme';
import { OrderSettings } from "../../../../service/doctype/index"

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    { id: 1, label: "Clients", icon: "👥", navigation: "CustomerStock" },
    { id: 2, label: "Commandes", icon: "🛒", navigation: "StockSales" },
    { id: 3, label: "Articles", icon: "📦", navigation: "StockArticles" },
    { id: 5, label: "Payments", icon: "💳", navigation: "PaymentList" },
    { id: 6, label: "Cart", icon: "🚚", navigation: "StockCarts" },
    { id: 4, label: "Logout", icon: "🏷️", navigation: "LoginScreen" },
  ];
  const [List, setList] = useState([])

  useEffect(() => {
      
      fetchOrders()
    }, [])
  useFocusEffect(
      useCallback(() => {
        
        fetchOrders()
        return () => {
          //nsole.log('HomeScreen is unfocused');
        };
      }, [])
    );
    const fetchOrders = async () => {
      try {
          const list = await OrderSettings.getorders(`?fields=["*"]&limit_page_length=10000&limit_page_length=10000`);
          if (list) {
              setList(list?.data);
          }
      } catch (error) {
          console.error('Error fetching admin list:', error);
      }
  };
  const changeMenu = (nav)=>{
    // if(nav==="LoginScreen"){
      navigation.navigate(nav)

    // }
  }

  const renderMenuItem = (item) => (
    <TouchableOpacity
      style={styles.menuItem}
      key={item.id}
      onPress={() => changeMenu(item.navigation)}
    >
      <Text style={styles.menuIcon}>{item.icon}</Text>
      <Text style={styles.menuLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text>{item.name || "No Date"}</Text>
      <Text>{item.status || "No Type"}</Text>
    </View>
  );


  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.datePicker}>
            <Dashboard />
          </View>
        </View>

        {/* Grid Menu */}
        <View style={styles.menuGrid}>
          {menuItems.map(renderMenuItem)}
        </View>

        {/* Recent Transactions */}
        <View style={styles.transactionsSection}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>Transactions récentes</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Sales")} >
              <Text style={styles.seeAll}>Plus de détails</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={List}
            keyExtractor={(item) => item?.name?.toString()}
            renderItem={renderTransactionItem}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    backgroundColor: Colors.colorTextTitles,
    borderRadius: 10,
    padding: 15,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    color: "#fff",
    fontSize: 16,
  },
  userName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  notificationIcon: {
    padding: 10,
  },
  datePicker: {
    height: 80,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 30,
  },
  menuItem: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  menuIcon: {
    fontSize: 24,
  },
  menuLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  transactionsSection: {
    flex: 1,
    marginHorizontal: 16,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#FF5733",
    fontSize: 13,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 5,
    elevation: 2,
  },
});
