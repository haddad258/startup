import React, { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Colors } from '../../../../core/theme';
import Card from './Order'; // Adjust the path based on your file structure
import SelectInputDocs from '../../../../components/Doctype/SelectInputDocs';
import { useFocusEffect } from '@react-navigation/native';
import { PosAPI } from '../../../../service/doctype';

const { height } = Dimensions.get('window');



const HomeScreen = ({ navigation }) => {
  const [item, setItem] = useState([])
  const GetDoctype = async () => {
    try {
      // const list = await CommonDocTypes.getcommonDoctypes(`Item Group?fields=["*"]&limit_page_length=10000`);
      const list = await PosAPI.getpos(`?fields=["*"]&limit_page_length=10000`);
      if (list) {
        setItem(list?.data);

      }
    } catch (error) {
      console.error('Error fetching admin list:', error);
    }
  };
  useEffect(() => {
    GetDoctype()
  }, []);
  useFocusEffect(
    useCallback(() => {
      GetDoctype()
      console.log('ArticlesPos is focused');
      return () => {
        //nsole.log('HomeScreen is unfocused');
      };
    }, [])
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
      <View style={style.header}>
        <SelectInputDocs
          placeholder="Customer"
          value={item.item_group}
          onChangeText={(option) => console.log(option.name)}
          style={style.input}
          doctype={"Customer"}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.mainContainer}>
          <View style={{ marginTop: 5 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={item} // Replace with actual data
              renderItem={({ item }) => <Card order={item} navigation={navigation} />}
              contentContainerStyle={{ paddingBottom: 10 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
  },
  input: {
    height: 60,
    width: '100%',
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: Colors.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
