








import React from 'react';
import { FlatList, View,StyleSheet } from 'react-native';
import ProjectCard from './project';
import {units} from '../../../../core/theme';
import data from './data'
const Projects = () => {


  const RenderProjectCard = ({item}) => (
    <ProjectCard
      onPress={() => console.log(item.title)}
      restaurant={item}
    />
  );
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <FlatList
                data={data}
                renderItem={RenderProjectCard}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    listContainer: {
      paddingVertical: units.height / 50,
    },
  });
  
export default Projects;

