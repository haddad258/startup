

import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../../core/theme";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Supplier({ item, props }) {

    const updateSupplier =(item)=>{
        alert("to do products SupplierPack")
    }
    return (
        <TouchableOpacity onPress={() =>updateSupplier(item)}>
            <View style={styles.container}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.customer_group} </Text>
                <Text style={styles.description}>{item.customer_type}</Text>
                <Text style={styles.productDescription}>{item.owner} </Text>
                <View style={styles.iconsView}>
                    <FontAwesome name="edit" size={20} color={Colors.info} />
                    <FontAwesome name="trash" size={20} color={Colors.info} />
                </View>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        marginTop: 20,
        width: (windowWidth / 2) - (windowWidth * 0.05),
        backgroundColor: Colors.white,
        borderColor:Colors.primary,
        borderWidth: 1,
        borderRadius: 15
    },
    photo: {
        width: windowWidth / 2.4,
        height: windowHeight / 6,
        borderRadius: 15,
        marginTop:3,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
    },
    description: {
        marginTop: 5,
        marginBottom: 5
    },
    iconsView: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: 'row',
        padding:10
    },
    productDescription: {
        fontSize: 8,
        color: Colors.primary,
        marginBottom: 4,
      },
      iconsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',  // Adjusted to evenly space icons
        width: "100%",  // Expanded to full width
        padding:10
    },
})
export default Supplier
