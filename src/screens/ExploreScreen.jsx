import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import fruits from '../assets/images/fruits.png'
import oil from '../assets/images/oil.png'
import nonVeg from '../assets/images/nonVeg.png'
import bakkery from '../assets/images/bakkery.png'
import egg from '../assets/images/egg.png'
import coldrink from '../assets/images/coldrink.png'

const ExploreScreen = () => {

  const renderEachItem = ({item})=>{
    return(
      <TouchableOpacity style={styles.parentContainer}>
        <View style={[styles.childContainer, { backgroundColor: item.bgColor, borderColor: item.borderColor }]}>
          <Image source={item.img} style={styles.image}/>
          <Text style={styles.innerTxt}>{item.subHeading}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const data =[
    {
      id:1,
      img:fruits,
      subHeading:"Fresh Fruits \n & Vegetables",
      bgColor:"#E8F7EE",
      borderColor:"#53B175"
    },
    {
      id:2,
      img:oil,
      subHeading:"Cooking Oil\n & Ghee",
      bgColor:"#FFF5E1",
      borderColor:"#F5A623"
    },
    {
      id:3,
      img:nonVeg,
      subHeading:"Meat & Fish",
      bgColor:"#FFEAEA",
      borderColor:"#FF4C4C"
    },
    {
      id:4,
      img:bakkery,
      subHeading:"Bakery & Snacks",
      bgColor:"#F3E8FF",
      borderColor:"#9B51E0"
    },
    {
      id:5,
      img:egg,
      subHeading:"Dairy & Eggs",
      bgColor:"#FFFDE7",
      borderColor:"#F2C94C"
    },
    {
      id:6,
      img:coldrink,
      subHeading:"Beverages",
      bgColor:"#E0F7FA",
      borderColor:"#2D9CDB"
    },
  ]

  const [searchTxt, setSearchTxt] = useState("");

  return (
     <FlatList
    data={data}
    numColumns={2}
    keyExtractor={(item)=>item.id.toString()}
    renderItem={renderEachItem}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ 
      paddingBottom:50,
      backgroundColor:'white'  
    }}
    style={{ backgroundColor:'white' }} 
    ListHeaderComponent={() => (
      <View>
        <Text style={styles.mainHeading}>Find Products</Text>
        <SearchBar searchTxt={searchTxt} setSearchTxt={setSearchTxt}/>
      </View>
    )}
  />
  )
}

const styles = StyleSheet.create({
  mainHeading:{
    fontSize:24,
    marginTop:40,
    marginBottom:20,
    alignSelf:'center',
    fontWeight:'600'
  },
  parentContainer:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center'
  },
  childContainer:{
    height:200,
    width:160,
    marginTop:30,
    marginHorizontal:10,
    borderWidth:1,
    borderRadius:20,
    justifyContent:'center'
  },
  image:{
    resizeMode:'contain',
    alignSelf:'center',
    marginTop:20,
    height:80,
    width:80
  },
  innerTxt:{
    fontSize:16,
    fontWeight:'500',
    textAlign:'center',
    margin:10
  }
})

export default ExploreScreen
