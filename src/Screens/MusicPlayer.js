import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image} from "react-native";
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";

const MusicPlayer =()=>{

   const {width, height}= Dimensions.get('window');



    return(
  <SafeAreaView style={styles.container}>

      <View style={{flex:0.9, justifyContent:'center', borderWidth:1, borderColor:'red', alignItems:'center'}}>
        <View  style={[styles.artworkwrapper, { }]}>
        <Image 
           style={styles.artworkimg}
           source={require("../Assets/img2.jpeg")} 
        />
        </View>
        <View>
          {/* <Slider
          style={styles.progressContainer}
          value={10}
          /> */}
        </View>

      </View>
      
      <View style={[styles.iconV , { width: width}] }>
      <TouchableOpacity>
        <Icon2 name ="like2" size={30} color='white' />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name ="heart-outline" size={30} color='white' />
      </TouchableOpacity>
   
      <TouchableOpacity>
        <Icon2 name ="like1" size={30}  color='white'/>
      </TouchableOpacity>
      </View> 
     
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
    iconV:{
      flex:.1,
      flexDirection:'row',
      justifyContent:"space-around",
      borderTopColor:'white',
      alignItems:'center',
      borderWidth:1,

    },
    artworkwrapper:{
         width: 300,
         height:340,

    },
    artworkimg:{
      height:"100%",
      width:"100%",
      borderRadius:15,

    }

  });
  
  // Export your screen component
  export default MusicPlayer;