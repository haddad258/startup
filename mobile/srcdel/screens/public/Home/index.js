import React from 'react';
import { Image, ScrollView, View,Text } from 'react-native';
import Advertisements from './advertisements'
import Projects from './project';
import Services from './services';
import {useTranslation} from 'react-i18next';
import GeneralSettings from '../../../i18n/settings';

const HelloWorldApp = () => {
  const {t} = useTranslation();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <Text>{t('welcome')}</Text>
        <Image
          source={{uri:"https://i.ibb.co/FhKZgRh/test.gif"}}
          style={{ width: 100, height: 100 }}
        />
         <GeneralSettings />
        <Advertisements />
        <Projects />
      </View>
      <Services />

    </ScrollView>
  );
};
export default HelloWorldApp;