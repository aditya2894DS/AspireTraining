import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

function Header() {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}
        style={styles.container}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="#1f1f1f" />
            <TextInput
              style={styles.input}
              placeholder="Search Amazon.in"
              placeholderTextColor="#848484"
            />
          </View>
          <AntDesign name="scan1" size={22} color="#1f1f1f" />
        </View>
        <Feather name="mic" size={22} color="#1f1f1f" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  borderRed: {
    borderWidth: 1,
    borderColor: 'red',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%'
  },

  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#a1bcc0',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  }
});

export default Header;
