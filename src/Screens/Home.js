import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen'; 

const Home = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
  <Tab.Navigator>
    <Tab.Screen name='All' component={HomeScreen} />
    <Tab.Screen name='Favourate' component={SecondScreen} />
  </Tab.Navigator>
  );
};

// Styles for your components
const styles = StyleSheet.create({ 
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Export your screen component
export default Home;
