import React from 'react';
import { StyleSheet, ScrollView, View, TextInput,Text,Dimensions } from 'react-native';
import Advertisements from './advertisements'
import Projects from './project'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTranslation } from 'react-i18next';
// import GeneralSettings from '../../../i18n/settings';
import {Colors} from '../../../core/theme';
const width = Dimensions.get('window').width / 2 - 30;

const HomeApp = () => {
  const { t } = useTranslation();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text
         style={{
          fontSize: 15,
          fontWeight: "bold",
          color: "#ef6136"
        }}>{t('welcome')}</Text>
        <View style={{ marginLeft: 50,width:"110%", flexDirection: 'row' }}>
          <View style={style.searchContainer}>
            <Icon name="search" size={25} style={{ marginLeft: 20 }} />
            <TextInput placeholder="Search" style={style.input} />
          </View>
          <View style={style.sortBtn}>
            <Icon name="sort" size={30} color={Colors.white} />
          </View>
        </View>
        <Advertisements />
        <Projects />

        {/* <GeneralSettings />
        <Projects /> */}
      </View>
      {/* <Services /> */}

    </ScrollView>
  );
};
const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: Colors.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: Colors.green,
  },
  card: {
    height: 225,
    backgroundColor: Colors.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: Colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: Colors.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeApp;

