import React from 'react';
import { View,StatusBar, Text, StyleSheet } from 'react-native';
import MusicPlayer from './MusicPlayer';

const AudioTrack = () => {
  return (
    <View style={styles.container2}>
        <StatusBar barStyle={'light-contents'}/>
       <MusicPlayer/>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container2: {
    flex: 1,
    backgroundColor:'#222831'
    // backgroundColor:'white'
  }, 

});

export default AudioTrack;
