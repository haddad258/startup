

import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Colors, units } from "../../../core/theme";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Plan({ item, props }) {

    const updateSupplier =(item)=>{
        alert("to do products PlanPack")
    }
    return (
        <TouchableOpacity onPress={() =>updateSupplier(item)}>
            <View style={styles.container}>
                <Image style={styles.photo} source={{ uri: "https://i.ibb.co/3zwjS4X/formation.webp" }} />
                <Text style={styles.title}>{item.titre}</Text>
                <View style={styles.divider} />
                <Text style={styles.description}>{item.responsable}</Text>
                <Text style={styles.localisation}>{item.localisation}</Text>
                <Text style={styles.descriptionT}>{item.duree}</Text>
                <View style={styles.iconsView}>
                    <FontAwesome name="download" size={20} color={Colors.yellow} />
                    <FontAwesome name="heart" size={20} color={Colors.red} />
                
                </View>
                <Text style={styles.productDescription}>{item.description}</Text>
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
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.primary,
        marginTop: 3,
    },
    description: {
        color:Colors.primary,
    },
    descriptionT: {
        color:Colors.error,
    },
    localisation: {
        color:"#007188",
        fontSize: 9,

    },
    
    iconsView: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: 'row',
        padding:10
    },
    productDescription: {
        fontSize: 10,
        color: "#007188",
        marginBottom: 4,

      },
      iconsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',  // Adjusted to evenly space icons
        width: "100%",  // Expanded to full width
        padding:15,
    },
    divider: {
        height: 10, // Hauteur de la ligne
        backgroundColor: '#FFAAFF', // Couleur de la ligne
        marginVertical: 10, // Espace au-dessus et au-dessous du diviseur
        width:units 
    }
})
export default Plan
