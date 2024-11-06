import React from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import STYLES from './style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../../core/theme';

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: Colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.primary }}>
            Dossier Juridique
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="badge"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="CIN"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="article"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="RNE"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="assignment"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Patent"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="info"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Status"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="receipt"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Quitance"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="description"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Contrat"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="more"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Autre"
              style={STYLES.input}
            />
          </View>

          <TouchableOpacity style={STYLES.btnPrimary}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
              Ajout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
