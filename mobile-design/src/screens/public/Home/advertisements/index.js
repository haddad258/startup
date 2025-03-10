import {
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    Dimensions,
  } from "react-native";
  import React from "react";
  import { Colors } from "../../../../core/theme";
  import data from './data'
  const { width } = Dimensions.get("window");
  const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
  
  const Advertisements = () => {
    const flatListRef = React.useRef();
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    const onViewRef = React.useRef(({ changed }) => {
      if (changed[0].isViewable) {
        setCurrentIndex(changed[0].index);
      }
    });
  
    const scrollToIndex = (index) => {
      flatListRef.current?.scrollToIndex({ animated: true, index: index });
    };
  
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => console.log("clicked")}
          activeOpacity={1}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.sliderImage}
          />
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.sliderView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={(ref) => {
            flatListRef.current = ref;
          }}
          style={styles.slider}
          viewabilityConfig={viewConfigRef}
          onViewableItemsChanged={onViewRef.current}
        />
  
        <View style={styles.dotView}>
          {data.map(({ }, index) => (
            <TouchableOpacity
              key={index.toString()}
              style={[
                styles.circle,
                {
                  backgroundColor: index == currentIndex ? Colors.primary : Colors.gray,
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
      marginLeft: 8,
      marginRight: 8,
    },
    slider: {
      maxHeight: 255,
    },
    sliderImage: {
      width: width - 20,
      height: 200,
      resizeMode: "cover",
      margin: 4,
      borderRadius: 10,
    },
    dotView: {
      flexDirection: "row",
      marginTop: -15,
      marginLeft: 15,
    },
    circle: {
      width: 10,
      height: 10,
      backgroundColor: Colors.gray,
      borderRadius: 50,
      marginHorizontal: 5,
    },
  });
  
  export default Advertisements;