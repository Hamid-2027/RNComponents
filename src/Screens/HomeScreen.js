import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useFetch from '../Hook/useFetch.hook';


const HomeScreen = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data'); // call custom hook
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>HomeScreen</Text>
  </View>
  );
};

// Styles for your components
const styles = StyleSheet.create({
  container: {
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
export default HomeScreen;
