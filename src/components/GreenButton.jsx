import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const GreenButton = ({name,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.btnTxt}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        backgroundColor:'#53B175',
        paddingHorizontal:100,
        paddingVertical:15,
        borderRadius:30,
        elevation:2,
        marginHorizontal:20
    },
    btnTxt:{
        fontSize:20,
        color:'#FFF9FF'
    }
})

export default GreenButton