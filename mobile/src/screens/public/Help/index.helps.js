import React, { useEffect, useState , useCallback} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from './Plan'
import { Colors } from "../../../core/theme";
import { useFocusEffect } from '@react-navigation/native';
const formationsAgriculture = [
  {
      id: 1,
      titre: "Introduction à l'agriculture biologique",
      description: "Formation de base sur les principes de l'agriculture biologique, incluant les pratiques sans produits chimiques et la gestion durable des sols.",
      duree: "3 jours",
      niveau: "Débutant",
      dateDebut: "2024-02-15",
      localisation: "Centre de formation agricole de Tunis",
      responsable: "formateur 1",
      cout: "Gratuit",
  },
  {
      id: 2,
      titre: "Techniques de gestion de l'irrigation",
      description: "Formation sur la gestion efficace de l'eau en agriculture, avec des méthodes d'irrigation modernes et durables.",
      duree: "2 jours",
      niveau: "Intermédiaire",
      dateDebut: "2024-03-10",
      localisation: "Centre régional de Sousse",
      responsable: "formateur 2",
      cout: "100 TND",
  },
  {
      id: 3,
      titre: "Optimisation de la fertilisation des sols",
      description: "Formation sur l'utilisation responsable des engrais pour maximiser la fertilité des sols sans impact environnemental négatif.",
      duree: "1 semaine",
      niveau: "Intermédiaire",
      dateDebut: "2024-04-05",
      localisation: "Ferme expérimentale de Bizerte",
      responsable: "Institut de Recherche Agricole",
      cout: "200 TND",
  },
  {
      id: 4,
      titre: "Lutte biologique contre les parasites",
      description: "Approches de lutte contre les parasites sans produits chimiques, en utilisant des méthodes biologiques et naturelles.",
      duree: "4 jours",
      niveau: "Avancé",
      dateDebut: "2024-05-20",
      localisation: "Centre d'Innovation Agricole de Kairouan",
      responsable: "formateur 3",
      cout: "300 TND",
  },
  {
      id: 5,
      titre: "Transformation et commercialisation des produits agricoles",
      description: "Formation sur les techniques de transformation des produits agricoles et la vente directe sur les marchés locaux.",
      duree: "3 jours",
      niveau: "Débutant",
      dateDebut: "2024-06-15",
      localisation: "Maison des Agriculteurs de Sfax",
      responsable: "formateur 4",
      cout: "150 TND",
  },
  {
      id: 6,
      titre: "Introduction à l'agriculture de précision",
      description: "Formation sur les technologies modernes de suivi de cultures, incluant l'utilisation de drones et de capteurs pour optimiser les rendements.",
      duree: "1 semaine",
      niveau: "Avancé",
      dateDebut: "2024-07-10",
      localisation: "Centre de Recherche Agritech de Monastir",
      responsable: "formateur 5",
      cout: "500 TND",
  }
];
function Esim() {

    useEffect(() => {
        console.log('HomeScreen is focused');
      }, [])
    useFocusEffect(
        useCallback(() => {
          console.log('HomeScreen is focused');
          return () => {
            console.log('HomeScreen is unfocused');
          };
        }, [])
      );
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.backgroundColor }}>
             <View
        style={{
          alignItems: 'center',
        }}>
            <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#ef6136"
                }}
              >
                Formations
              </Text>

        </View>
            <FlatList
                data={formationsAgriculture}
                numColumns={2}
                vertical
                renderItem={({ item }) => (<Item item={item} />)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
export default Esim;
