import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {Colors } from '../../../../core/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';



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
          this.props.navigation.navigate('ProductView', {
            screen: 'Products',
            params: {item: item},
          });
        }}>
        <View style={styles.categoryItem}>
          <Image
            source={{
              uri: `https://res.cloudinary.com/sivadass/image/upload/v1534611354/dummy-products/food/idli.jpg`,
            }}
            style={{height: 45, width: 45}}
          />
          <Text style={styles.title}>{item?.categry} category</Text>
          <Text style={styles.title}>{item?.categry} Icons</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainContainer}>

        <FlatList
          data={[1,2,3]}
          renderItem={({item, index}) => this.renderCategoryItem(item, index)}
          keyExtractor={item => item.id}
        />
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
    backgroundColor: Colors.white,
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
