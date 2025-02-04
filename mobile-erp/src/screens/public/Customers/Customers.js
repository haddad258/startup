import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Colors ,units } from "../../../core/theme";


function CustomerI({ item, props }) {
    const updatestomer = () => {
        console.log("To do: Products PlanPack",(item));
    };

    return (
        <TouchableOpacity onPress={()=>updatestomer()} >
            <View style={styles.container}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.customer_group}</Text>
                <Text style={styles.description}>{item.customer_type}</Text>
                <Text style={styles.productDescription}>{item.custom_phone}</Text>
                <Text style={styles.customerPrice}>{item.custom_total_unpaid} DA</Text>
                <View style={styles.iconsView}>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="edit" size={10} color={Colors.info} />
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="trash" size={10} color={Colors.danger} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        paddingRight: 10,
        width: (units.width * 0.43),
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    title: {
        fontSize: 12,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        paddingLeft: 10,

    },
    description: {
        fontSize: 12,
        color: Colors.secondary,
        marginBottom: 4,
        paddingLeft: 10,

    },
    productDescription: {
        fontSize: 12,
        color: Colors.secondary,
        marginBottom: 10,
        paddingLeft: 10,

    },
    customerPrice: {
        fontSize: 15,
        color: Colors.primary,
        marginBottom: 10,
        paddingLeft: 10,

    },
    iconsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "100%",
        paddingVertical: 10,
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
});

export default CustomerI;
