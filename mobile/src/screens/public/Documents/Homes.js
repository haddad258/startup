import React , { useState}from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import foodData from "./food-data.json";
import * as DocumentPicker from 'expo-document-picker';
import { Colors, units } from '../../../core/theme';
const courseContent = [
  {
    "id": "1",
    "nomDocument": "Plan d'irrigation",
    "type": "Rapport",
    "dateSoumission": "2024-01-01",
    "lien": "https://example.com/plan-irrigation",
    "validite": true
  },
  {
    "id": "2",
    "nomDocument": "Budget estimatif",
    "type": "Budget",
    "dateSoumission": "2024-01-05",
    "lien": "https://example.com/budget-estimatif",
    "validite": true
  },
  {
    "id": "3",
    "nomDocument": "Certification biologique",
    "type": "Certificat",
    "dateSoumission": "2024-02-20",
    "lien": "https://example.com/certification-bio",
    "validite": false
  },
  {
    "id": "4",
    "nomDocument": "Analyse de rentabilité",
    "type": "Étude",
    "dateSoumission": "2024-04-28",
    "lien": "https://example.com/analyse-rentabilite",
    "validite": true
  },
  {
    "id": "982",
    "nomDocument": "Évaluation des sols",
    "type": "Étude",
    "dateSoumission": "2024-05-25",
    "lien": "https://example.com/evaluation-sols",
    "validite": false
},
{
  "id": "331",
  "nomDocument": "Étude de faisabilité",
  "type": "Étude",
  "dateSoumission": "2024-08-15",
  "lien": "https://example.com/etude-faisabilite",
  "validite": true
},
{
  "id": "212",
  "nomDocument": "Guide de culture des pistaches",
  "type": "Guide",
  "dateSoumission": "2024-08-20",
  "lien": "https://example.com/guide-culture-pistaches",
  "validite": true
},
]
const DocumentationsScreens = ({ route }) => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Permet de sélectionner tout type de fichier
        copyToCacheDirectory: true, // Copie le fichier dans le cache de l'application
      });

      if (res.type === 'success') {
        setFile(res);
        Alert.alert("Fichier sélectionné", `Nom: ${res.name}\nType: ${res.mimeType}`);
      } else {
        Alert.alert("Annulé", "La sélection de fichier a été annulée.");
      }
    } catch (err) {
      Alert.alert("Erreur", "Une erreur est survenue.");
    }
  };
  const BottomNavigationBar = () => {
    return (
      <View
        style={{
          height: 80,
          bottom: 0,
          zIndex: 100,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            height: 60,
            width: 70,
            backgroundColor: Colors.colorTiers,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Icon name="density-small" style={{ color: Colors.text, fontSize: 25 }} />
        </View>
        <TouchableOpacity
        onPress={handleFileUpload}
          style={{
            height: 60,
            backgroundColor: Colors.colorTiers,
            flex: 1,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 18, color: Colors.secondary, fontWeight: 'bold' }}>
           upload File
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const CourseContentList = ({ content, index }) => {
    return (
      <View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: 'row',
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#E4E7F4' }}>
            {'0' + (index + 1)}
          </Text>
          <View style={{ paddingHorizontal: 20, flex: 1 }}>
            <Text
              style={{
                fontSize: 15,
                color: '#A0A5BD',
                fontWeight: '500',
                marginBottom: 5,
              }}>
              {content.nomDocument}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
             Date de Soumission: {content.dateSoumission}
            </Text>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor:content.validite ? '#49CC96':Colors.error,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {

              content.validite ?
                <Icon name="done-outline" style={{ fontSize: 25, color: '#fff' }} />
                :
                <Icon name="downloading" style={{ fontSize: 25, color: Colors.white }} />

            }
          </View>

        </View>
        <View style={{
          width: units,
          height: 1, // Hauteur de la ligne
          backgroundColor: '#CCCCCC', // Couleur de la ligne
          marginVertical: 10 // Espace au-dessus et au-dessous du diviseur
        }} />
      </View>
    );
  };
  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
        <ImageBackground
          source={require('../../../../assets/im.webp')}
          style={{
            height: 400,
            paddingTop: 40,
            paddingRight: 20,
            paddingLeft: 20,
          }}>
          <Image
            resizeMode="contain"
            style={{
              width: 100,
              marginBottom: 10,
            }}
            source={require('../../../../assets/im.webp')}
          />
       
          <View style={{ top: -25, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
              <Icon
                name="people"
                size={25}
                style={{ color: '#61688B', marginRight: 5 }}
              />
              <Text style={{ color: '#61688B', fontWeight: 'bold' }}>
                { "   "}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="star"
                size={25}
                style={{ color: '#61688B', marginRight: 5 }}
              />
              <Text style={{ color: '#61688B', fontWeight: 'bold' }}>
                
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 25, fontWeight: 'bold', top: -10 }}>
            
          </Text>
        </ImageBackground>
        <BottomNavigationBar />

        <View
          style={{
            flex: 1,
            marginTop: -35,
            backgroundColor: '#fff',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            height: '100%',
          }}>
          <Text
            style={{
              marginTop: 40,
              marginBottom: 20,
              marginHorizontal: 20,
              fontSize: 21,
              fontWeight: 'bold',
            }}>
            Documents en cours de gestion
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={courseContent}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <CourseContentList index={index} content={item} />
            )}
          />
        </View>
      </SafeAreaView>
    </ScrollView>

  );
};

export default DocumentationsScreens;
