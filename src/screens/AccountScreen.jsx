import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import myImg from '../assets/images/myImg.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const AccountScreen = () => {

  const data = [
    {id:1, icon:Ionicons, iconName: "bag-handle-outline", heading:"Orders", seconIcon:AntDesign , seconIconName:"right"},
    {id:2, icon:AntDesign, iconName: "idcard", heading:"My Details", seconIcon:AntDesign , seconIconName:"right"},
    {id:3, icon:Ionicons, iconName: "location-outline", heading:"Delivery Address", seconIcon:AntDesign , seconIconName:"right"},
    {id:4, icon:Ionicons, iconName: "wallet-outline", heading:"Payment Methods", seconIcon:AntDesign , seconIconName:"right"},
    {id:5, icon:Ionicons, iconName: "ticket-outline", heading:"Promo Cord", seconIcon:AntDesign , seconIconName:"right"},
    {id:6, icon:Ionicons, iconName: "notifications-outline", heading:"Notifications ", seconIcon:AntDesign , seconIconName:"right"},
    {id:7, icon:Ionicons, iconName: "help-circle-outline", heading:"Help", seconIcon:AntDesign , seconIconName:"right"},
    {id:8, icon:Ionicons, iconName: "extension-puzzle-outline", heading:"About ", seconIcon:AntDesign , seconIconName:"right"},
  ]

const renderEachItem = ({item}) => {
  const LeftIcon = item.icon;       
  const RightIcon = item.seconIcon; 
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.leftRow}>
        <LeftIcon name={item.iconName} color="#000" size={20} />
        <Text style={styles.itemTxt}>{item.heading}</Text>
      </View>
      <RightIcon name={item.seconIconName} color="#000" size={20} />
    </TouchableOpacity>
  );
};


  return (
    <View style={styles.container}>

    
      <FlatList 
      data={data}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={renderEachItem}
    ListHeaderComponent={() => (
          <View style={[styles.row, {marginTop:40}]}>
            <Image source={myImg} style={styles.profilePic} />

            <View style={styles.textContainer}>
              <Text style={styles.name}>Tabish Farooq</Text>
              <Text style={styles.email}>tabishfarooqvctm@gmail.com</Text>
            </View>

            <TouchableOpacity>
              <MaterialCommunityIcons name="pencil" color="#53B175" size={24} />
            </TouchableOpacity>
          </View>
        )}

        ListFooterComponent={()=>(
          <TouchableOpacity style={styles.signOutBtn}>
              <Ionicons name="enter-outline" color="#53B175" size={24} />
              <Text style={styles.signOutBtnTxt}>Log Out</Text>
          </TouchableOpacity>
        )}
      />

      

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    
  },
  row:{
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:'center',
  },
  profilePic:{
    width:60,
    height:60,
    borderRadius:30,
    resizeMode:'cover',
    marginRight:15
  },
  textContainer:{
    flex:1 
  },
  name:{
    fontSize:24,
    fontWeight:'bold'
  },
  email:{
    fontSize:14,
    color:'gray'
  },
item:{
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',        
    justifyContent:'space-between', 
    borderTopWidth:1,
    borderColor:'#ddd',
    width:'100%',
    height:42,
    paddingHorizontal:20,
    backgroundColor:'white'
  },
  leftRow:{
    flexDirection:'row',
    alignItems:'center'
  },
  itemTxt:{
    fontSize:18,
    fontWeight:'500',
    marginLeft:10
  },
  signOutBtn:{
  width:"80%",
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'flex-start',  
  padding:10,
  alignSelf:'center',
  borderWidth:1,
  borderColor:'grey',
  backgroundColor:'#F2F3F2',
  borderRadius:30,
  marginVertical:30
},
signOutBtnTxt:{
  fontSize:20,
  color:'#53B175',
  fontWeight:'600',
  position:'absolute',  
  left:"50%",
  transform:[{translateX: -30}]
}

})

export default AccountScreen
