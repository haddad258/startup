import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Dashboard from "./Home";

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    { id: 1, label: "Clients", icon: "👥", navigation: "Customers" },
    { id: 2, label: "Sales Orders", icon: "🛒", navigation: "Sales" },
    { id: 3, label: "Articles", icon: "📦", navigation: "Articles" },
    { id: 4, label: "Stock", icon: "🏷️", navigation: "Warehouses" },
    { id: 5, label: "Payments", icon: "💳", navigation: "PaymentList" },
    { id: 6, label: "CartScreen", icon: "🚚", navigation: "CartScreen" },
  ];

  const renderMenuItem = (item) => (
    <TouchableOpacity
      style={styles.menuItem}
      key={item.id}
      onPress={() => navigation.navigate(item.navigation)}
    >
      <Text style={styles.menuIcon}>{item.icon}</Text>
      <Text style={styles.menuLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text>{item.date || "No Date"}</Text>
      <Text>{item.type || "No Type"}</Text>
    </View>
  );

  const transactionsData = [
    { id: 1, date: "2024-12-01", type: "Sale" },
    { id: 2, date: "2024-12-02", type: "Refund" },
    { id: 31, date: "2024-12-03", type: "Purchase" },
    { id: 321, date: "2024-12-03", type: "Purchase" },
    { id: 311, date: "2024-12-03", type: "Purchase" },
    { id: 233, date: "2024-12-03", type: "Purchase" },
    { id: 309, date: "2024-12-03", type: "Purchase" },
    { id: 399, date: "2024-12-03", type: "Purchase" },
    { id: 37, date: "2024-12-03", type: "Purchase" },
  ];

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
            <Text style={styles.transactionsTitle}>Recent Transactions</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Sales")} >
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={transactionsData}
            keyExtractor={(item) => item.id.toString()}
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
    backgroundColor: "#FF5733",
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
    fontSize: 14,
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
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#FF5733",
    fontSize: 14,
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
