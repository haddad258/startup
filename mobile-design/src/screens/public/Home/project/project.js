import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    Image,
  } from 'react-native';
  import React from 'react';
  import {Colors,units} from '../../../../core/theme';

  import RateCard from './Rate.Card';
  import FavoritesCard from './FavoritesCard';
  import CategoryCard from './CategoryCard';
  
  const ProjectCard = ({onPress, restaurant}) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Image
            source={{uri: restaurant.image}}
            borderTopLeftRadius={15}
            borderTopRightRadius={15}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.rateContainer}>
            <RateCard count={restaurant.rate} />
          </View>
          <View style={styles.favoriteContainer}>
            {/* <FavoritesCard /> */}
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>{"title "}services</Text>
            <View style={styles.titleContainer}>
              {/* <MotorIcon /> */}
              <Text style={styles.deliveryText}>Free services</Text>
              {/* <ClockIcon style={{marginLeft: units.width / 23}} /> */}
              <Text style={styles.deliveryText}>5-10 mois</Text>
            </View>
            <View style={styles.categoryContainer}>
              <CategoryCard title="Test" />
              <View style={styles.card}>
                <CategoryCard title="agritech" />
              </View>
              <View style={styles.card}>
                <CategoryCard title="agritech" />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  
  export default ProjectCard;
  
  const styles = StyleSheet.create({
    container: {
      borderRadius: 15,
      backgroundColor: Colors.primary,
      shadowColor: Colors.backgroundColor,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 2,
      marginHorizontal: units.width / 46,
      marginVertical: units.height / 30,
    },
    title: {
      color: Colors.white,
      fontSize: 15,
      lineHeight: 15,
      fontWeight: '600',
      marginHorizontal: units.width / 46,

    },
    bodyContainer: {
      // marginTop: units.height / 67,
      // marginLeft: units.width / 31,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    deliveryText: {
      marginLeft: units.width / 75,
      color:Colors.white
    },
    rateContainer: {
      position: 'absolute',
      top: units.height / 81,
      left: units.width / 34,
    },
    favoriteContainer: {
      position: 'absolute',
      top: units.height / 81,
      right: units.width / 34,
    },
    categoryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: units.height / 50,
      marginHorizontal: units.width / 50,
    },
    card: {
      marginLeft: units.width / 47,
    },
    image: {
      height: units.height / 6,
    },
  });
  