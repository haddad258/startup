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
                        informations
                    </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="person"
                            color={Colors.primary}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Nom de l'agriculteur : "
                            style={STYLES.input}
                        />
                    </View>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="location-on"
                            color={Colors.primary}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Emplacement : "
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
                            placeholder="Coût : "
                            style={STYLES.input}
                        />
                    </View>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="phone"
                            color={Colors.primary}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Téléphone : "
                            style={STYLES.input}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="email"
                            color={Colors.primary}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Email : "
                            style={STYLES.input}
                            keyboardType="email-address"
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
                            placeholder="Autres informations : "
                            style={STYLES.input}
                            multiline={true}
                        />
                    </View>
                    <Text style={{marginTop:10}} >Type de culture et Surface cultivée </Text>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="nature"
                            color={Colors.primary}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Type de culture : "
                            style={STYLES.input}
                        />
                    </View>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="square-foot"
                            color={Colors.primary}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Surface cultivée (en hectares) : "
                            style={STYLES.input}
                            keyboardType="numeric"
                        />
                    </View>
                    <Text style={{marginTop:10}} >Année de début d'activité et Certification bio </Text>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="calendar-today"
                            color={Colors.primary}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Année de début d'activité : "
                            style={STYLES.input}
                            keyboardType="numeric"
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
                            placeholder="Certification bio (Oui/Non) : "
                            style={STYLES.input}
                        />
                    </View>

                    <Text style={{marginTop:10}} > Nombre d'employés et Méthode d'irrigation</Text>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="people"
                            color={Colors.primary}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Nombre d'employés : "
                            style={STYLES.input}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="opacity"
                            color={Colors.primary}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Méthode d'irrigation : "
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
