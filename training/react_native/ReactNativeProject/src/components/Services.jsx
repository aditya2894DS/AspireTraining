import React, { useEffect } from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import PayBills from '../assets/pay-bills.jpeg';
import ScanQR from '../assets/scan-qr.jpeg';

import { RecentSearchData } from '../data/RecentSearchData';


export default function Services() {

  return (  
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
        style={styles.container}>
        <View style={styles.serviceContainer}>
          <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image style={styles.imgStyle} source={AmazonPay} />
              <Text style={styles.title}>Amazon Pay</Text>
            </View>
            <View style={styles.innerContainer}>
              <Image style={styles.imgStyle} source={SendMoney} />
              <Text style={styles.title}>Send Money</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image style={styles.imgStyle} source={PayBills} />
              <Text style={styles.title}>Pay Bills</Text>
            </View>
            <View style={styles.innerContainer}>
              <Image style={styles.imgStyle} source={ScanQR} />
              <Text style={styles.title}>Scan QR</Text>
            </View>
          </View>
        </View>
        {RecentSearchData.map(item => (
          <View key={item.id} style={styles.serviceContainer}>
            <Text style={styles.recentSearch}>{item.title}</Text>
            <Image source={item.image} style={styles.serviceImg} />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginTop: -10
  },
  serviceContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    width: 180,
    height: 200,
    paddingHorizontal: 10,
    paddingTop: 5,
    marginRight: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    color: 'black',
  },
  serviceImg: {
    width: '100%',
    height: 150,
    marginHorizontal: 2
  },
  outerContainer: {
    backgroundColor: 'white',
    marginLeft: 5,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 140,
  },
  recentSearch: {
    fontSize: 13,
    color: 'black',
    backgroundColor: "transparent",
    paddingHorizontal: 5,
    fontWeight: 'bold',
    height: '20%'
  },
});
