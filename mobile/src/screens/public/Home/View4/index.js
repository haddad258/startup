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
              name="business"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Nom du projet"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="place"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Localisation"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="flag"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Objectifs"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="date-range"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Durée du projet"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="spa"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Type de culture ou production"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="landscape"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Superficie de la parcelle"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="eco"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Techniques agricoles utilisées"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="construction"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Matériel et équipements nécessaires"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="group"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Main-d'œuvre"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="attach-money"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Budget estimé"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="account-balance"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Financement"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="public"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Impact environnemental"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="people"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Bénéfices pour la communauté"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="warning"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Risques potentiels"
              style={STYLES.input}
            />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="security"
              color={Colors.primary}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Stratégies de mitigation"
              style={STYLES.input}
            />
          </View>


          <View style={STYLES.btnPrimary}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
              Ajout
            </Text>
          </View>
        </View>


        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{ color: Colors.light, fontWeight: 'bold' }}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: Colors.pink, fontWeight: 'bold' }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
