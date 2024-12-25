import React,{ useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { Colors, units } from "../../../../core/theme";
//import data from "./data";
import { useEffect } from "react";
import { CommonDocTypes } from "../../../../service/common";
import { API_URLPublic } from "../../../../service/Api/config";

const Advertisements = () => {
  const flatListRef = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [SliderList,setSliderList]=useState([])
  const onViewRef = React.useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };
  const GetDoctype = async () => {
    try {
      const list = await CommonDocTypes.getcommonDoctypes("entity/advertisements");
      if (list) {
        setSliderList(list?.data);

      }
    } catch (error) {
      console.error('Error fetching admin list:', error);
    }
  };
  useEffect(() => {
    GetDoctype()
  }, []);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => console.log("clicked")}
        activeOpacity={0.9}
        style={styles.cardContainer}
      >
        <Image source={{ uri: API_URLPublic+"advertisements/" +item.images	 }} style={styles.sliderImage} />
        <Text style={styles.imageCaption}>{item.content}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.sliderView}>
      <FlatList
        data={SliderList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        style={styles.slider}
        onViewableItemsChanged={onViewRef.current}
        contentContainerStyle={{ paddingRight: units.width * 0.2 }}
      />
      <View style={styles.dotView}>
        {SliderList.map((_, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.circle,
              {
                backgroundColor:
                  index === currentIndex ? Colors.primary : Colors.gray,
                transform: index === currentIndex ? [{ scale: 1.3 }] : [],
              },
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderView: {
    marginHorizontal: 10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: Colors.backgroundColor
  },
  slider: {
    maxHeight: 300,
  },
  cardContainer: {
    width: units.width * 0.9, // Adjust width to leave 2% visible
    marginHorizontal: 5,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    backgroundColor: Colors.white,
    borderRadius: 15,
    overflow: "hidden",
  },
  sliderImage: {
    width: "100%",
    height: units.height * 0.2,
    resizeMode: "cover",
  },
  imageCaption: {
    padding: 10,
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.text,
  },
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: Colors.gray,
    borderRadius: 7,
    marginHorizontal: 5,
  },
});

export default Advertisements;
