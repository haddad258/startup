import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import { Colors,units } from '../../../core/theme';
  
  // import FavoritesCard from '../components/FavoritesCard';
  // import BackButton from '../components/BackButton';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  // import addBasketApi from '../../services/api/addBasketApi';
  import {useDispatch} from 'react-redux';
  import data from './data'
  const radioButtonsData = [
    {
      id: '1',
      label: 'Pepper  Julienned \t +2.3$',
      value: 'option1',
      color: Colors.primary,
      selected: true,
    },
    {
      id: '2',
      label: 'Baby Spinach \t +4.7$',
      value: 'option2',
      color: Colors.primary,
    },
    {
      id: '3',
      label: 'Masroom \t +6.1$',
      value: 'option3',
      color: Colors.primary,
    },
  ];
  
  const Detail = ({navigation, route}) => {
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState();
    const dispatch = useDispatch();
  
   
  
    const onClickBack = () => {
      navigation.goBack();
    };
  
    useEffect(() => {
      setAmount(count * data.price);
    }, [count]);
  
    const hadnleAddCount = () => {
      setCount(count + 1);
    };
  
    const handleDecreaseCount = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
  
    const handleBasket = () => {
      const product = {
        title: data.title,
        price: amount ? amount : data.price,
        description: data.description,
        image: data.image,
        count: count,
      };
      addBagProductApi(product, handleNavigateBasket);
    };
  
    const handleNavigateBasket = () => {
      navigation.jumpTo("routes.BASKETTAB");
    };
  
    const addFavoritesRestaurant = () => {
      console.log({restaurant: data});
    };
  
    return (
      <ScrollView>
  
      <SafeAreaView style={styles.container}>
        {/* {loading && <Loading />} */}
        <ScrollView style={styles.scrrol}>
          <View style={styles.topContainer}>
            <Image
              source={{uri: "https://i.ibb.co/SdPsJYp/Screenshot-from-2024-10-22-08-26-07.png"}}
              style={styles.image}
              borderRadius={10}
              resizeMode="cover"
            />
            <View style={styles.topBar}>
              {/* <BackButton onPress={onClickBack} /> */}
              {/* <FavoritesCard onPress={addFavoritesRestaurant} /> */}
            </View>
          </View>
          <View>
            <Text style={styles.title}>{data?.title}</Text>
            <View style={styles.starContainer}>
              <Icon name="star" size={25} color={Colors.backgroundColor} />
              <Text style={styles.rate}>{data?.rate} (30+)</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                $ {amount ? parseFloat(amount).toFixed(2) : data.price}
              </Text>
              <View style={styles.countContainer}>
                <TouchableOpacity onPress={handleDecreaseCount}>
                  <Icon
                    name="minus-circle-outline"
                    color={Colors.primary}
                    size={30}
                  />
                </TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity onPress={hadnleAddCount}>
                  <Icon name="plus-circle" size={30} color={Colors.primary} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.aboutText}>{data?.description}</Text>
            <Text style={styles.addElementText}>Choice of Add On</Text>
            {/* <RadioGroup
              radioButtons={radioButtons}
              color={Colors.ORANGE}
              containerStyle={styles.radioContainer}
            /> */}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleBasket}>
              <View style={styles.buttonIcon}>
                <Icon name="basket" size={25} color={Colors.secondary} />
              </View>
              <Text style={styles.buttonTitle}>ADD TO Test</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default Detail;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    scrrol: {
      paddingHorizontal: units.width / 17,
    },
    image: {
      height: units.height / 4,
      width: units.width / 1.2,
      alignSelf: 'center',
    },
    topBar: {
      position: 'absolute',
      flexDirection: 'row',
      left: units.width / 28,
      right: units.width / 28,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: units.height / 81,
    },
    topContainer: {
      marginTop: units.height / 40,
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: '600',
      color: Colors.primary,
      marginTop: units.height / 36,
    },
    starContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: units.height / 67,
    },
    rate: {
      color: Colors.primary,
      fontWeight: '600',
      marginLeft: units.width / 46,
    },
    price: {
      color: Colors.secondary,
      fontWeight: '600',
      lineHeight: 31,
      fontSize: 31,
      marginTop: units.height / 45,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    countContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    countText: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.primary,
      marginHorizontal: units.width / 41,
    },
    aboutText: {
      color: Colors.gray,
      fontSize: 15,
      marginTop: units.height / 37,
    },
    addElementText: {
      fontSize: 18,
      fontWeight: '600',
      color: Colors.primary,
      marginTop: units.height / 37,
    },
    radioContainer: {
      marginTop: units.height / 81,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    buttonContainer: {
      backgroundColor: Colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 28,
      paddingVertical: units.height / 116,
      paddingHorizontal: units.width / 53,
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: units.height / 25,
    },
    buttonIcon: {
      backgroundColor: Colors.white,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: units.width / 31,
      paddingVertical: units.height / 67,
    },
    buttonTitle: {
      color: Colors.white,
      fontSize: 15,
      marginHorizontal: units.width / 31,
      fontWeight: '600',
    },
  });
  