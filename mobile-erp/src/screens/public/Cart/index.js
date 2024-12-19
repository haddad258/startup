import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../../core/theme';
import { addToCartMultiple, clearCart, removeFromCart, updateCartQuantity } from '../../../store/cart/actions';
import SelectInputDocs from '../../../components/Doctype/SelectInputDocs';
import { OrderSettings } from '../../../service/doctype';
import moment from 'moment';
import { formatDate } from '../../../core/helpers/formdate';

function CartScreen({ navigation }) {
    const cartReducer = useSelector((state) => state.cartReducer);
    const [delivery_date, setdelivery_date] = useState(formatDate(new Date()));
    const [customer, setcustomer] = useState('')
    const [taxes, settaxes] = useState([])


    const dispatch = useDispatch();

    const handleIncrement = (product, qty) => {
        dispatch(addToCartMultiple(product.name, product, qty + 1));
    };

    const handleDecrement = (product, qty) => {
        console.log(product)
        if (qty > 1) {
            dispatch(addToCartMultiple(product.name, product, qty - 1));
        } else {
            dispatch(removeFromCart(product.name));
        }
    };

    const handlePress = async () => {
        try {
            

            const payload = {
                customer: customer,
                delivery_date: delivery_date,
                items: Object.values(cartReducer.products).map((element) => {
                    return {
                        qty: element.quantity,
                        item_code: element?.product?.item_code,
                        rate: element?.product?.standard_rate,
                        amount:element.quantity*element?.product?.standard_rate
    
                    };
                })
    ,
                // taxes: [
                //     {
                //         charge_type: "On Net Total",
                //         account_head: "VAT - TC",
                //         rate: 5
                //     }
                // ]
            };
            console.log(payload)
            // console.log(taxes)

            const list = await OrderSettings.addorders(payload);
            if (list) {
                console.log("list?.data");
                alert("Order Created")
                dispatch(clearCart())

            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    }
    const renderEmptyCart = () => (
        <View style={styles.emptyCartContainer}>
            <Image
                style={styles.emptyCartImage}
                source={{ uri: "https://i.ibb.co/80t9PPy/Screenshot-from-2024-02-13-11-59-08.png" }}
            />
            <Text style={styles.emptyCartText}>Your cart is empty!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Articles')} style={styles.shopButton}>
                <Text style={styles.shopButtonText}>Shop Now</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.inputDate}> Date  {(delivery_date)}  </Text>
            <SelectInputDocs
                placeholder="Customer"
                value={customer}
                onChangeText={(option) => setcustomer(option.name)}
                style={styles.input}
                doctype={"Customer"}
            />
            <SelectInputDocs
                placeholder="taxes"
                value={taxes}
                onChangeText={(option) => settaxes([option])}
                style={styles.input}
                doctype={"Sales Taxes and Charges Template"}
            />
            <FlatList
                data={Object.values(cartReducer.products)}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        {/* <Image source={{ uri: 'https://i.ibb.co/vVKPrLN/imp.png' }} style={styles.productImage} /> */}
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>product: {item.product?.name}</Text>
                            <Text style={styles.productPrice}>price :{item.product?.standard_rate}</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={() => handleDecrement(item?.product, item.quantity)}>
                                    <MaterialIcons name="remove" size={20} color={Colors.secondary} />
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{item.quantity}</Text>
                                <TouchableOpacity onPress={() => handleIncrement(item?.product, item.quantity)}>
                                    <MaterialIcons name="add" size={20} color={Colors.secondary} />
                                </TouchableOpacity>
                            </View>
                            <Entypo
                                onPress={() => dispatch(removeFromCart(item?.product.name,item?.product,item.quantity))}
                                name="trash"
                                size={20}
                                color={Colors.error}
                                style={styles.trashIcon}
                            />
                        </View>
                    </View>
                )}
                ListEmptyComponent={renderEmptyCart()}
                showsVerticalScrollIndicator={false}
            />

            {Object.values(cartReducer.products).length > 0 && (
                <TouchableOpacity onPress={() => handlePress()} style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        padding: 10,
    },
    emptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    emptyCartText: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.gray,
        marginBottom: 10,
    },
    shopButton: {
        backgroundColor: Colors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    shopButtonText: {
        color: Colors.white,
        fontSize: 16,
    },
    productCard: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    input: {
        height: 60,
        width: '99%',
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 12,
        backgroundColor: '#fff',
    },
    inputDate: {
        height: 30,
        width: '99%',
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        textAlign: "center",
        backgroundColor: '#fff',
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    productDetails: {
        flex: 1,
        marginLeft: 30,
    },
    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.primary,
    },
    productPrice: {
        fontSize: 14,
        color: Colors.gray,
        marginVertical: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    quantityText: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    trashIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    checkoutButton: {
        backgroundColor: Colors.secondary,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    checkoutButtonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '600',
    },
});

export default CartScreen;
