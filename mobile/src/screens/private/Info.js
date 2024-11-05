import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import dataio from './data';
import { Colors } from '../../core/theme';

const DiscoverScreen = ({navigation}) => {
    return (
        <View style={styles.container}>

            {/* Top Bar */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                {/* Back Button */}
                <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.navigate('HomeScreen')} />  
                {/* Page Title */}
                <Text style={{alignSelf:'center', fontSize:16}}>Recommandations: 
                <Text  style={{alignSelf:'center', fontSize:10}}>  nécessaires pour un projet en fonction de son emplacement</Text>

                </Text>
                
                {/* Empty View */}
                <AntDesign style={{opacity:0}} name="arrowleft" size={24} color="black"  /> 
            </View>

            {/* Search Bar */}
          

            {/* Search Results */}
            <View style={styles.bestSellersContainer}>
                <FlatList
                    data={dataio.dataio}
                    renderItem={({ item }) => (
                        <View style={{ marginTop: 7, marginBottom:15, backgroundColor: "#f0f0f0", padding:5, borderRadius:10}}>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                {/* Product thumbnail */}
                                {/* <Image style={styles.thumbnail} source={{ uri: item.image }} /> */}
                                
                                {/* Details Container */}
                                <View style={{ flex:1, justifyContent: 'space-between', marginLeft:10, paddingVertical:10, }}>
                                    {/* Product title & description */}
                                    <View>
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 15, marginTop: 2 ,fontWeight: '700' }}>{item.title}</Text>
                                        <Text numberOfLines={3} ellipsizeMode='tail' style={{fontSize:15, color:Colors.secondary}}>{item.category}</Text>
                                        <Text numberOfLines={3} ellipsizeMode='tail' style={{fontSize:15, color:Colors.primary}}>{item.standardReference}</Text>
                                        <Text numberOfLines={3} ellipsizeMode='tail' style={{fontSize:13, color:'grey'}}>{item.description}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3, paddingHorizontal:7,}}>
                                        {/* Price */}
                                        <Text style={{ fontWeight: '700', color:Colors.primary }}> {item.status}</Text>
                                        {/* Ratings */}
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontWeight: '700',color:"#009899", marginLeft:6 }}>{item.updateDate}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                      )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    SearchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        marginTop: 20,
        paddingVertical: 9,
        paddingHorizontal: 15,
        borderRadius: 7,
        marginBottom:15,
    },
    bestSellersContainer:{
        flexDirection: 'column',
        padding: 15,
    },
    h2: {
        fontSize: 20,
        fontWeight: 600,
    },
    thumbnail: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 12,
    },
})

export default DiscoverScreen