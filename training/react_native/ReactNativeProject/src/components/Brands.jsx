import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import Brand1 from '../assets/brand1.jpeg';
import Brand2 from '../assets/brand2.jpeg';
import Brand3 from '../assets/brand3.jpeg';
import Brand4 from '../assets/brand4.jpeg';

export default function Brands() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands of the day</Text>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={Brand1} style={styles.imgStyle} />
            <Text style={styles.brandTitle}>Min. 20% off | Caratlane Diamond Necklace</Text>
          </View>
          <View style={styles.brands}>
            <Image source={Brand2} style={styles.imgStyle} />
            <Text style={styles.brandTitle}>Min. 40% off | Fossil, Titan Smart Watch & More</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={Brand3} style={styles.imgStyle} />
            <Text style={styles.brandTitle}>Heels - Upto 50% OFF on Heeled Sandals High Heel</Text>
          </View>
          <View style={styles.brands}>
            <Image source={Brand4} style={styles.imgStyle} />
            <Text style={styles.brandTitle}>Sony 60W Bluetooth Soundbar Speaker Audio Engine</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  brands:{
    width: '50%',
    padding: 10,
  },
  imgStyle: {
    height: 150,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10
  },
  innerContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row'
  },
  brandTitle: {
    fontSize: 12, 
    color: 'black',
    marginTop: 4
  }
});
