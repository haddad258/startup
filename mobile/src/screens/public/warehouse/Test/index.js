import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// import Header from './Header';
import ProductItem from './ProductItem';

const DataProduct = (props) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);

    const fetchDataProduct = async () => {
        console.log("Fetching data..."); // Placeholder for fetching logic
    };

    useEffect(() => {
        fetchDataProduct();
    }, [page, rowsPerPage, props.dataCategories]);

    return (
        <View style={{ flex: 1 }}>
            {/* Header Section */}
            {/* <Header title="Data Product" onAdd={() => props.navigation.navigate('AddProduct')} /> */}

            {/* Product List */}
            <View style={styles.header}>
            <Text style={styles.headerTitle}>{"title"}</Text>
            <TouchableOpacity onPress={()=>console.log("onAdd")}>
                <Icon name="circle-with-plus" size={30} color="white" style={styles.headerIcon} />
            </TouchableOpacity>
        </View>
            <FlatList
                data={[0,1,2,3]}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                renderItem={({ item }) => (
                    <ProductItem
                        product={item}
                        onPress={() => props.navigation.navigate('EditProduct', { selectedRow: item })}
                    />
                )}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 17,
        backgroundColor: 'white',
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#f7b81f',
    },
    headerTitle: {
        marginHorizontal: 17,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    headerIcon: {
        marginHorizontal: 17,
    },
});

export default DataProduct;
