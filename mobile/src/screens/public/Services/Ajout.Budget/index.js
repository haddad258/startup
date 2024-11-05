import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import STYLES from './style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../../../core/theme'

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: Colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: Colors.primary }}>
            Ajout de Parcel
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="security"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Nom: "
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="edit-road"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Coût: "
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="edit-location"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Description: "
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="energy-savings-leaf"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Projet: "
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="event-note"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Action: "
              style={STYLES.input}
            />
          </View>



          <View style={STYLES.btnPrimary}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
              Ajout
            </Text>
          </View>
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
