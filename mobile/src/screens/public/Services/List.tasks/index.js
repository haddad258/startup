import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Colors} from '../../../../core/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import pets from './data';
const {height} = Dimensions.get('window');
const petCategories = [
  { name: 'Équipement', icon: 'tools' },
  { name: 'transport', icon: 'truck' },
  { name: 'Énergie et services publics', icon: 'bolt' },
  { name: 'Autres dépenses', icon: 'plus' },
];

const Card = ({pet, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', pet)}>
      <View style={style.cardContainer}>
        {/* Render the card image */}

        {/* Render all the card details here */}
        <View style={style.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontWeight: 'bold', color: Colors.dark, fontSize: 15}}>
              {pet?.name}
            </Text>
           {
           pet.action==="moins" ?
           <Icon name="plus-circle" size={22} color={Colors.primary} />
          :
           <Icon name="minus-circle" size={20} color={Colors.error} />}
          </View>

          {/* Render the age and type */}
          <Text style={{fontSize: 12, marginTop: 5, color: Colors.dark}}>
            {pet?.cost}
          </Text>
          <Text style={{fontSize: 10, marginTop: 5, color: Colors.grey}}>
            {pet?.description}
          </Text>

          {/* Render distance and the icon */}
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Icon name="map-marker" color={Colors.primary} size={18} />
            <Text style={{fontSize: 12, color: Colors.grey, marginLeft: 5}}>
              {pet.project}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [filteredPets, setFilteredPets] = React.useState([]);

  const fliterPet = index => {
    console.log(pets[index])
    setFilteredPets(pets[index].expenses);
  };

  React.useEffect(() => {
    fliterPet(0);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, color: Colors.white}}>
      <View style={style.header}>
        <Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer} />
        <Text style={{color: Colors.primary, fontWeight: 'bold', fontSize: 16}}>
          Budget config
        </Text>
        <Image
          source={require('../../../../../assets/image1.png')}
          style={{height: 30, width: 30, borderRadius: 25}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.mainContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {petCategories.map((item, index) => (
              <View key={'pet' + index} style={{alignItems: 'left'}}>
                <TouchableOpacity
                  onPress={() => {
                    setSeletedCategoryIndex(index);
                    fliterPet(index);
                  }}
                  style={[
                    style.categoryBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? Colors.primary
                          : Colors.white,
                    },
                  ]}>
                  <Icon
                    name={item.icon}
                    size={30}
                    color={
                      selectedCategoryIndex == index
                        ? Colors.white
                        : Colors.primary
                    }
                  />
                </TouchableOpacity>
                <Text numberOfLines={6} style={style.categoryBtnName}>{item.name}</Text>
              </View>
            ))}
          </View>

          {/* Render the cards with flatlist */}
          <View style={{marginTop: 20}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredPets}
              renderItem={({item}) => (
                <Card pet={item} navigation={navigation} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.gray,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: Colors.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
    width:60
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: Colors.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: Colors.background,
    borderRadius: 20,
  },
});
export default HomeScreen;
