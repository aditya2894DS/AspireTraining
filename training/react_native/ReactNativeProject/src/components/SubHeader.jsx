import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


function SubHeader() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}
      style={styles.container}>
        <Feather name='map-pin' size={16} color="#1f1f1f" />
      <Text style={styles.deliver}>Deliver to Muskan - Pune 897654</Text>
        <SimpleLineIcons name='arrow-down' size={10} color="#1f1f1f" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: 'center'
  },
  deliver: {
    fontSize: 13,
    color: '#2c4341',
    paddingHorizontal: 6
  }
});

export default SubHeader;
