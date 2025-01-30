import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions, View, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Colors, units } from "../../../core/theme";

const windowWidth = Dimensions.get("window").width;

function Supplier({ item }) {
  const updateSupplier = (item) => {
    alert("To do: products SupplierPack");
  };

  return (
    <View>
    <TouchableOpacity onPress={() => updateSupplier(item)} style={styles.card}>
      {/* <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image || "https://via.placeholder.com/150" }}
          style={styles.image}
        />
      </View> */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.custom_phone}</Text>
        <Text style={styles.description}>{item.supplier_group}</Text>
        <Text style={styles.owner}>Unpaid : {item.custom_total_unpaid}</Text>
        <View style={styles.iconsView}>
          <FontAwesome
            name="edit"
            size={15}
            color={Colors.info}
            onPress={() => alert("Modifier")}
          />
          <FontAwesome
            name="trash"
            size={15}
            color={Colors.error}
            onPress={() => alert("Supprimer")}
          />
        </View>
      </View>
    </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width:units.width*0.45,
    margin: 5,
    backgroundColor: Colors.white,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: Colors.secondary,
    borderWidth: 1,
    elevation: 5,
  },
  imageContainer: {
    width: "100%",
    height: 120,
    backgroundColor: Colors.gray,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 5,
  },
  owner: {
    fontSize: 12,
    color: Colors.secondary,
    fontStyle: "italic",
    marginBottom: 10,
  },
  iconsView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Supplier;
