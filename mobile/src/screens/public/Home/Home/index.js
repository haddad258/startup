import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { Colors } from '../../../../core/theme';
function Menu(props) {
  const UserInfoReducer = useSelector((state) => state.UserInfoReducer?.userInfo);
  const menuItems = [
    { key: '1', title: 'Accueil', icon: 'home', navigation: "HomeScreen" },
    { key: '2', title: 'Aide', icon: 'info-circle', navigation: "About" },
    { key: '3', title: 'Documentation', icon: 'cogs' },
    { key: '4', title: 'Panier', icon: 'shopping-cart', navigation: "MyCart" },
    { key: '5', title: 'Paiement', icon: 'ellipsis-h', navigation: "mysofstim" },
    { key: '6', title: 'Déconnexion', icon: 'arrow-circle-right', navigation: "Login" },
    // Ajoutez d'autres éléments de menu si nécessaire
];


  const navigationsRouter = async (navigation) => {
      console.log("logout")
   
  };

  const calculateNumColumns = () => {
    // Adjust the maximum number of columns as needed
    const maxColumns = 3;
    const length = menuItems.length;
    return Math.min(length, maxColumns);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigationsRouter(item.navigation)} style={styles.menuBox}>
      <View style={styles.menuBoxIcons}>
        <Icon name={item.icon} size={30} style={styles.icon} />
      </View>
      <Text style={styles.info}>{item.title}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View onPress={() => console.log(UserInfoReducer)} style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }}
          />
          <View style={styles.Editstyle}>
            <TouchableOpacity onPress={() => navigationsRouter("EditInfo")}>
              <FontAwesome5 name="pen" color={Colors.primary} size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.nameCustomer}>AgriConnect</Text>
          <Text style={styles.CinCustomer}>contact@agriconnect.com</Text>
          <Text >+216 53******</Text>

        </View>
      </View>

      <View style={styles.ViewListMenu}>
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          numColumns={calculateNumColumns()} // Calculate the number of columns dynamically
        />
      </View>

    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  header: {
    backgroundColor: Colors.gray,
  },
  headerContent: {
    padding: 10,
    alignItems: 'center',
  },
  ViewListMenu: {
    marginTop: 30
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  nameCustomer: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '600',
  },
  CinCustomer: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '600',
  },

  Editstyle: {
    padding: 10,
    position: 'absolute',
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 20,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end"
  },
  bodyContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.primary
  },
  menuBoxIcons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBox: {
    backgroundColor: Colors.gray,
    width: "30%",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    margin: 5,
    padding: 20,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
  },
  icon: {
    justifyContent: 'center',
    color: Colors.white

  },
  info: {
    fontSize: 16,
    color: Colors.white

  },

})