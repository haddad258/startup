

import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  View
} from "react-native";
import foodData from "./food-data.json";
import ListItem from "./ListItem";
import CartButton from "./CartButton";
import { Colors } from "../../../core/theme";

export default class Documentations extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Menu",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      headerRight: (
        <CartButton
          onPress={() => {
            navigation.navigate("Cart");
          }}
        />
      )
    };
  };

  handleNaviagation = () => {
    this.props.navigation.navigate("Documentations");
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
            <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#ef6136"
                }}
              >
                Documentations <Text  style={{
                  fontSize: 10,
                  color: '#000'
                }}>Liste des documents requis pour un projet selon sa localisation.</Text>
              </Text>

        </View>
      
        <FlatList
          data={foodData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem
              name={item.nomProjet}
              image={item.image}
              cuisine={item.cout}
              price={item.localisation}
              label={item.dateDebut}
              estValide={item.estValide}
              cout={item.cout}
              handleNaviagation={this.handleNaviagation}
            />
          )}
        />
  
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 8,
    marginBottom: 8
  }
});

