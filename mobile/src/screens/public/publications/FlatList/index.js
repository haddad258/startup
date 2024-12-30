








// import React from 'react';
// import { FlatList, View,StyleSheet } from 'react-native';
// import ProjectCard from './project';
// import {units} from '../../../../core/theme';
// import data from './data'
// const Projects = () => {


//   const RenderProjectCard = ({item}) => (
//     <ProjectCard
//       onPress={() => console.log(item.title)}
//       restaurant={item}
//     />
//   );
//     return (
//         <View
//             style={{
//                 flex: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}>
//             <FlatList
//                 data={data}
//                 renderItem={RenderProjectCard}
//                 keyExtractor={(_, index) => index.toString()}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 style={styles.listContainer}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({

//     listContainer: {
//       paddingVertical: units.height / 50,
//     },
//   });
  
// export default Projects;

import React, { useContext } from "react";
import { View, Text } from "react-native";
import FeaturedCardComponent from "./FeaturedCardComponent";
import { Colors } from "../../../../core/theme";

const images = [
  require('../images/image1.png'),
  require('../images/image1.png'),
  require('../images/image1.png'),

];

const FeaturedItemsSection = () => {

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          paddingHorizontal: 10,
          marginTop: 20,
          marginBottom: 15,
          color: Colors.text,
        }}
      >
        Featured Items
      </Text>
      <View style={{ flexDirection: "column", paddingHorizontal: 10 }}>
        {[...Array(2)].map((_, rowIndex) => (
          <View
            key={rowIndex}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {[...Array(2)].map((_, colIndex) => (
              <FeaturedCardComponent
                key={colIndex}
                imageSource={images[rowIndex * 2 + colIndex]}
                title={`Featured Item ${rowIndex * 2 + colIndex + 1}`}
                description="This is a sample description for the featured item."
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default FeaturedItemsSection;
