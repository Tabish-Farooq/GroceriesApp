import { View, StyleSheet,Image,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import bg from '../assets/images/bg.png'
import carrot from '../assets/images/carrot.png'
import { useNavigation } from "@react-navigation/native";

const ImageAndHeading = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.parentContainer}>
      <Image source={bg} style={Styles.bgImg}/>
      <Image source={carrot} style={{position:'absolute',}}/>
      <Text style={Styles.txt}>Welcome {"\n"}to our store</Text>
      <Text style={{position:'absolute',color:'grey',top:570}}>Ger your groceries in as fast as one hour
      </Text>
      <TouchableOpacity style={Styles.btn} onPress={()=>{
        navigation.navigate("OnboardingScreenTwo")
      }}>
        
          <Text style={{fontSize:20,color:'white'}}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}


const Styles = StyleSheet.create({
  bgImg:{
    position:'relative'
  },
  txt:{
    fontSize:40,
    fontWeight:'400',
    marginTop:160,
    textAlign:'center',
    color:'white',
    position:'absolute'
  },
  parentContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    backgroundColor:'#53B175',
    borderRadius:19,
    margin:10,
    position:'absolute',
    width:300,
    height:50,
    top:600,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default ImageAndHeading