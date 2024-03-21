import React from 'react';
import {View, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen.jsx';
import Router from './src/navigation/Router.jsx';

function App() {
  return (
    <View>
      <StatusBar backgroundColor="#9ee4d4" barStyle="dark-content" /> 
      <Router />
      {/* <HomeScreen /> */}
    </View>
  );
}

export default App;
