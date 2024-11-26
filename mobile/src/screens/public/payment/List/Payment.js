import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from "react-native";
import {Colors} from "../../../../core/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Item({ item ,index}) {
    return (
      <TouchableOpacity
        key={item}
      
      style={[styles.itemThreeContainer,{backgroundColor:index%2 === 0? 'white':Colors.listBackGround}]}
        onPress={() =>console.log(item)}
      >
        <View style={styles.itemThreeSubContainer}>
  
          <View style={styles.ProdItem}>
            <Text style={styles.itemThreeProdItem}>N°: {item.name}</Text>
            <Text style={styles.itemThreeSubProdItem} >
              {item.amended_from} 
            </Text>
            <Text style={styles.itemThreeSubProdItem} >
              {item.title}
            </Text>
          </View>
          <View style={styles.itemThreeContent}>
            <Text style={styles.itemThreeBrand}>{item.name}</Text>
            <View>
              <Text style={styles.itemThreeTitle}>{item.party_name}</Text>
              <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                {item.posting_date}
              </Text>
            </View>
            <View style={styles.itemThreeMetaContainer}>
  
              <View
                style={[styles.badge, { backgroundColor: Colors.info }]}
              >
                <FontAwesome name="trash" color="white" size={20} />
  
              </View>
              <View
                style={[styles.badge, { backgroundColor: Colors.primary }]}
  
              >
                 <FontAwesome name="edit" color="white" size={20} />
              </View>
              <View
                style={[styles.badge, { backgroundColor: Colors.info }]}
  
              >
                 <FontAwesome name="eye" color="white" size={20} />
              </View>
              <Text style={styles.itemThreePrice}></Text>
            </View>
          </View>
        </View>
        <View style={styles.itemThreeHr} />
      </TouchableOpacity>
  
    )
  
  }
  
  
  const styles = StyleSheet.create({
    itemThreeContainer: {
      width: windowWidth - 10,
      borderRadius:10,
      borderWidth:2,
      borderColor:Colors.accent,
      margin:3
    },
    itemThreeSubContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
    itemThreeImage: {
      height: 100,
      width: 100,
    },
    itemThreeContent: {
      flex: 1,
      paddingLeft: 15,
      justifyContent: 'space-between',
      alignContent: "center",
      alignItems: "center"
    },
    ProdItem: {
      paddingLeft: 15,
      justifyContent: 'center',
      alignContent: "center",
      alignItems: "center"
    },
    itemThreeBrand: {
      fontSize: 20,
      color: Colors.blue,
    },
    itemThreeTitle: {
      fontSize: 16,
      color: '#000',
      textAlign: "center"
    },
    itemThreeProdItem: {
      fontSize: 18,
      color: Colors.info,
    },
    itemThreeSubProdItem: {
      fontSize: 15,
      color: "'#a4a4a4'",
    },
  
    itemThreeSubtitle: {
      fontSize: 14,
      color: '#a4a4a4',
    },
    itemThreeMetaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      
    },
    itemThreePrice: {
      fontSize: 15,
      color: '#5f5f5f',
      textAlign: 'right',
    },
    itemThreeHr: {
      flex: 1,
      height: 1,
      backgroundColor: '#e3e3e3',
      marginRight: -15,
    },
    badge: {
  
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 5,
      margin:3
    },
  });
  export default Item