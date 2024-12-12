import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import Dashboard from "../Components/Dashboard/Dashboard";

const HomeScreen = () => {
  const menuItems = [
    { id: 1, label: "Clients", icon: "👥", navigation: "ClientScreen" },
    { id: 2, label: "Sales Orders", icon: "🛒", navigation: "CommandeScreen" },
    { id: 3, label: "Items", icon: "📦", navigation: "ArticleScreen" },
    { id: 4, label: "Stock", icon: "🏷️", navigation: "StockScreen" },
    { id: 5, label: "Payments", icon: "💳", navigation: "PaymentScreen" },
    { id: 6, label: "Deliveries", icon: "🚚", navigation: "LivraisonScreen" },
  ];

  const renderMenuItem = (item) => {
    // Replace these with your actual dynamic values
    const badgeValue = 0; 

    return (
      <TouchableOpacity
        style={styles.menuItem}
        key={item.id}
        onPress={() => navigation.navigate(item.navigation)}
      >
        <Text style={styles.menuIcon}>{item.icon}</Text>
        <Text style={styles.menuLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text>{item.created_at}</Text>
      <Text>{item.operation_type}</Text>
    </View>
  );

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.userProfile}>
              <Text style={styles.menuIcon}>👤</Text>
              <View>
                <Text style={styles.greeting}>Hello,</Text>
                <Text style={styles.userName}>Test</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notificationIcon}>
              <Text>🔔</Text>
              {true && <ActivityIndicator size="large" color="#0000ff" />}
            </TouchableOpacity>
          </View>
          <View style={styles.datePicker}>
            {/* <Dashboard /> */}
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
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={[1,2,3]}
            keyExtractor={(item) => item.name}
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
    marginTop: 20,
    height: 80,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 100,
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
    marginTop: 30,
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
