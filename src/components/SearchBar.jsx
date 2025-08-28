import { View, TextInput,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';


const SearchBar = ({searchTxt,setSearchTxt}) => {
    
  return (
    <View style={styles.parentContainer}>
      <TextInput 
       style={styles.searchBar}
       value={searchTxt}
       onChangeText={(txt)=>setSearchTxt(txt)}
       keyboardType='ascii-capable'
       placeholder='Search Store'/>
       <Feather name="search" color="#000" size={22} style={styles.searchIcon} />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar:{
    borderRadius:20,
    marginHorizontal:15 ,
    paddingHorizontal:50,
    fontSize:15,
    borderWidth:1,
  },
  searchIcon:{
    position:'absolute',
    paddingHorizontal:30
 
  },
  parentContainer:{
    justifyContent:'center',
    
  }
})

export default SearchBar