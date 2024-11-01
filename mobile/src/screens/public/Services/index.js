import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, units } from '../../../core/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const tachesProjetAgriculture = [
  {
    id: 1,
    nom: "Préparation du sol",
    description: "Labour et fertilisation du sol en préparation pour la plantation.",
    statut: "en cours",
    dateDebut: "2024-03-01",
    dateFinEstimee: "2024-03-10",
    responsable: "Ahmed Ben Salah",
    priorite: "Haute",
  },
  {
    id: 2,
    nom: "Achat des semences",
    description: "Sélection et achat de semences de qualité pour la plantation.",
    statut: "à faire",
    dateDebut: "2024-03-05",
    dateFinEstimee: "2024-03-07",
    responsable: "Sara Khemiri",
    priorite: "Moyenne",
  },
  {
    id: 3,
    nom: "Irrigation initiale",
    description: "Installation des systèmes d'irrigation et première irrigation du sol.",
    statut: "à faire",
    dateDebut: "2024-03-10",
    dateFinEstimee: "2024-03-12",
    responsable: "Ali Ferjani",
    priorite: "Élevée",
  },
  {
    id: 4,
    nom: "Plantation",
    description: "Plantation des graines ou jeunes plants dans le sol préparé.",
    statut: "à faire",
    dateDebut: "2024-03-15",
    dateFinEstimee: "2024-03-20",
    responsable: "Khadija Mabrouk",
    priorite: "Haute",
  },
  {
    id: 5,
    nom: "Suivi de la croissance",
    description: "Surveillance des jeunes plants pour détecter les maladies et mesurer la croissance.",
    statut: "à faire",
    dateDebut: "2024-04-01",
    dateFinEstimee: "2024-08-01",
    responsable: "Yassine Boukhris",
    priorite: "Basse",
  },
  {
    id: 6,
    nom: "Fertilisation",
    description: "Ajout d'engrais en fonction des besoins nutritifs des plantes.",
    statut: "à faire",
    dateDebut: "2024-04-10",
    dateFinEstimee: "2024-05-10",
    responsable: "Mouna Toumi",
    priorite: "Moyenne",
  },
  {
    id: 7,
    nom: "Lutte contre les parasites",
    description: "Contrôle et prévention des parasites avec des traitements biologiques ou chimiques.",
    statut: "en cours",
    dateDebut: "2024-05-01",
    dateFinEstimee: "2024-06-30",
    responsable: "Amine Laabidi",
    priorite: "Haute",
  },
  {
    id: 8,
    nom: "Récolte",
    description: "Récolte des cultures lorsque les plants sont à maturité.",
    statut: "à faire",
    dateDebut: "2024-09-01",
    dateFinEstimee: "2024-09-15",
    responsable: "Leila Saidi",
    priorite: "Élevée",
  },
  {
    id: 9,
    nom: "Commercialisation",
    description: "Transport et vente des produits agricoles sur le marché local.",
    statut: "à faire",
    dateDebut: "2024-09-20",
    dateFinEstimee: "2024-10-01",
    responsable: "Fethi Mbarek",
    priorite: "Moyenne",
  }
];


class TasksToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      category: [],
    };
  }







  renderCategoryItem = (item, index) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          alert("tache à faire");
        }}>

        <View style={styles.categoryItem}>
          <View>
            <Text style={[styles.title,{color:Colors.primary}]}> {item.nom}</Text>
            <Text style={styles.title}> {item.priorite}</Text>
            <Text style={[styles.title,{color:Colors.error}]}> {item.statut}</Text>
            <Text style={{fontSize:14,color:Colors.gray}}> {item.dateDebut}</Text>
            <Text style={{fontSize:14,color:Colors.gray}}> {item.dateFinEstimee}</Text>
            </View>
          <Icon name="date-range" style={{ color: Colors.secondary, fontSize: 25 }} />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.mainContainer}>
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
            Tache à faire
          </Text>

        </View>
        <View
          style={{
            backgroundColor: Colors.gray,
            height: units
          }}>
          <FlatList
            data={tachesProjetAgriculture}
            renderItem={({ item, index }) => this.renderCategoryItem(item, index)}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors,
    flexDirection: 'column',
    padding: 20,
  },
  categoryItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
  },
});
export default TasksToDo;
