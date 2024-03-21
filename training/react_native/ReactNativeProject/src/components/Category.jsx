import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Categories} from '../data/Categories';

function Category() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {Categories.map(item => (
        <View style={styles.category} key={item.id}>
          <Image source={item.image} style={styles.imgStyle} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 10,
    color: '#2c4341',
  },
  category: {
    paddingHorizontal: 5,
    alignItems: 'center'
  }
});

export default Category;
