import { View, Image,Text, StyleSheet } from 'react-native'
import React from 'react'
import bgLogin from '../assets/images/bgLogin.png'


const ImageLogin = () => {
  return (
    <View style={Styles.container}>
      <Image source={bgLogin}/>
      <Text style={Styles.heading}>Get your groceries {"\n"}with nectar</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    container:{
          justifyContent:'center',
          alignItems:'center'
    },
    img:{
        ...StyleSheet.absoluteFillObject
    },
    heading:{
        fontSize:26,
        position:'absolute',
        left:10,
        top:400,
        fontWeight:'400'
    }
})

export default ImageLogin