








import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ProjectCard from './Services';
import { units } from '../../../../core/theme';
import data from './data'
const Services = () => {


    const RenderProjectCard = ({ item }) => (
        <ProjectCard
            onPress={() => console.log(item.title)}
            item={item}
        />
    );
    return (

        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={RenderProjectCard}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                style={{ marginTop: units.height / 34 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    listContainer: {
        paddingVertical: units.height / 50,
    },
});

export default Services;

