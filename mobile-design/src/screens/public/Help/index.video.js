import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../core/theme';

const Help = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      image: require("../../../../assets/image1.png"),
      title: "Facile à Rechercher",
      description: "Accédez rapidement aux informations agricoles essentielles. Trouvez les meilleures pratiques et solutions adaptées à vos cultures en un clic.",
      pub: "Profitez de notre technologie eSIM pour une connectivité sans faille, où que vous soyez, et suivez vos activités agricoles avec simplicité."
    },
    {
      image: require("../../../../assets/image3.jpeg"),
      title: "Facile à Accéder",
      description: "Connectez-vous instantanément à votre réseau agricole pour suivre la météo, les prix des marchés, et gérer vos ressources en temps réel.",
      pub: "Notre technologie eSIM vous permet d'accéder facilement à toutes les informations dont vous avez besoin pour gérer efficacement vos exploitations agricoles, sans avoir à changer de carte SIM."
    },
    {
      image: require("../../../../assets/images2.jpeg"),
      title: "Facile à Gérer",
      description: "Simplifiez la gestion de vos exploitations avec des outils intuitifs qui vous aident à optimiser vos rendements et suivre vos performances en toute simplicité.",
      pub: "Dites adieu aux complexités de gestion ! Grâce à notre solution eSIM, bénéficiez d'une connectivité mondiale sans effort pour gérer vos exploitations agricoles avec efficacité et confort."
    }
  ];

  const nextStep = () => {
    setCurrentStep(currentStep >= 2 ? 2 : currentStep + 1);
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
              backgroundColor: currentStep === index ? Colors.gray : Colors.white
            }}
          ></View>
        ))}
      </View>
      <Text style={styles.title}>{steps[currentStep].title}</Text>
      <Text style={styles.description}>{steps[currentStep].pub}</Text>
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
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
  },
  description: {
    textAlign: 'center',
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
