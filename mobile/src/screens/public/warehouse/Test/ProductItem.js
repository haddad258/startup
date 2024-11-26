import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProductItem = ({ product, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* Product Details */}
            <View style={styles.productDetails}>
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <View style={styles.productTextContainer}>
                    <Text style={styles.productTitle}>{product.product_name}</Text>
                    <Text style={styles.productPrice}>Price: Rp.{product.price}</Text>
                    <Text style={styles.productQuantity}>Quantity: {product.quantity}</Text>
                </View>
            </View>

            {/* Category Badge */}
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{product.category}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    productDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    productTextContainer: {
        flex: 1,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    productPrice: {
        color: 'green',
    },
    productQuantity: {
        color: 'gray',
    },
    badgeContainer: {
        marginTop: 5,
        alignSelf: 'flex-start',
        backgroundColor: 'red',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },
});

export default ProductItem;
