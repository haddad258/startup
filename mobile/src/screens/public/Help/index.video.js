import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, units } from '../../../core/theme';

const Help = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      "title": "Gestion intégrée et prévention à long terme",
      "description": "Combinez la lutte biologique avec d'autres pratiques durables, comme la rotation des cultures et l'utilisation de variétés résistantes aux parasites, pour prévenir les infestations futures et réduire la dépendance à long terme aux pesticides biologiques.",
      image: require("../../../../assets/pestt.jpeg"),
    },
    {
      image: require("../../../../assets/image1.png"),
      title: "Identification des parasites et évaluation de la situation",
      description: "Accédez rapidement aux informations agricoles essentielles. Trouvez les meilleures pratiques et solutions adaptées à vos cultures en un clic.",
      pub: "Profitez de notre technologie eSIM pour une connectivité sans faille, où que vous soyez, et suivez vos activités agricoles avec simplicité."
    },

    {
      "title": "Identification des parasites et évaluation de la situation",
      "description": "Avant de commencer, il est essentiel d'identifier les types de parasites présents et d'évaluer leur impact sur la culture. Cela permet de mieux cibler les solutions biologiques et de savoir quel niveau de contrôle est nécessaire.",
      image: require("../../../../assets/image1.png"),
    },
    {
      "title": "Sélection des agents biologiques adaptés",
      "description": "Choisissez les prédateurs naturels, les parasites ou les agents pathogènes spécifiques aux parasites identifiés. Par exemple, les coccinelles peuvent contrôler les pucerons, tandis que certains champignons sont utilisés pour combattre les insectes nuisibles.",
      image: require("../../../../assets/image1.png"),
    },
    {
      "title": "Introduction des agents de lutte biologique",
      "description": "Libérez les agents biologiques dans le champ ou la serre, en suivant les recommandations de densité et de période de libération. Cette étape est souvent effectuée lorsque les conditions environnementales sont favorables pour les agents et les cultures.",
      image: require("../../../../assets/image1.png"),
    },
    {
      "title": "Suivi et ajustement",
      "description": "Surveillez régulièrement les populations de parasites et d’agents biologiques pour évaluer l’efficacité de la lutte. Ajustez les quantités ou introduisez de nouveaux agents si les parasites ne sont pas suffisamment contrôlés.",
      image: require("../../../../assets/image1.png"),
    },
   
  ]


  const nextStep = () => {
    setCurrentStep(currentStep >= 4 ? 5 : currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep <= 0 ? 0 : currentStep - 1);
  };

  return (

    <View style={styles.container}>
      <Image source={steps[currentStep].image} style={styles.stepImage} resizeMode="cover" />
      <View style={styles.stepIndicatorView}>
        {steps.map((step, index) => (
          <View
            key={index}
            style={{
              ...styles.stepIndicator,
              width: currentStep === index ? 40 : 30,
              backgroundColor: currentStep === index ? Colors.gray : Colors.primary
            }}
          ></View>
        ))}
      </View>
      <Text style={styles.title}>{steps[currentStep].title}</Text>
      <Text style={styles.description}>{steps[currentStep].description}</Text>
      <View style={styles.navigationView}>
        {currentStep > 0 ? (
          <TouchableOpacity
            onPress={() => prevStep()}
            style={{ ...styles.navigationBtn, borderTopEndRadius: 20, borderBottomEndRadius: 20 }}>
            <Text style={styles.navigationBtnTxt}>Back</Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

        <TouchableOpacity
          onPress={() => nextStep()}
          style={{ ...styles.navigationBtn, borderTopStartRadius: 20, borderBottomStartRadius: 20 }}>
          <Text style={styles.navigationBtnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    height:units+100
  },
  stepImage: {
    width: '90%',
    height: '50%',
    marginVertical: 30,
  },
  stepIndicatorView: {
    flexDirection: 'row',
  },
  stepIndicator: {
    height: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 20,
    color:Colors.primary
  },
  description: {
    paddingHorizontal: 10,
  },
  navigationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  navigationBtn: {
    backgroundColor: Colors.primary,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Help;
