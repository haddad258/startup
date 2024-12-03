import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../../../core/theme';
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const RenderQuotation = ({ quotation }) => {
  return (
    <TouchableOpacity onPress={() => console.log(quotation)} style={styles.container}>
      <View style={styles.content}>
        <View style={quotation.attachment ? styles.mainContent : null}>
          <View style={styles.text}>
            <Text style={styles.name}>{quotation.name}</Text>
            <Text>{quotation.total}</Text>
          </View>
          <Text style={styles.timeAgo}>{quotation.transaction_date}</Text>
        </View>
      </View>
      <View style={quotation.attachment ? styles.mainContent : styles.mainContent}>
        <View style={styles.text}>
          <Text style={styles.name}>{quotation.name}</Text>
        </View>
        <Text style={styles.timeAgo}>{quotation.transaction_date}</Text>
      </View>
      <FontAwesome name="trash" color={Colors.info} size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor:Colors.light
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 10,
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50,
  },
  timeAgo: {
    fontSize: 12,
    margin:10,
    color: '#696969',
  },
  name: {
    fontSize: 16,
    color: '#1E90FF',
  },
});

export default RenderQuotation;
