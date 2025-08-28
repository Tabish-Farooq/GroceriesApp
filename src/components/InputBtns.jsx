import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InputBtns = () => {
  return (
    <View style={styles.parentConatainer}>
      <TouchableOpacity>
        <View style={styles.btn}>
          
          <AntDesign name="google" color="white" size={20} style={styles.icon} />
 
          <Text style={styles.btnText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>

       <TouchableOpacity>
        <View style={[styles.btn,{backgroundColor:'#4A66AC',marginTop:7}]}>
          
           <FontAwesome name="facebook" color="white" size={20} />
 
          <Text style={styles.btnText}>Continue with Facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  parentConatainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    top: 590,
    alignSelf:'center'
  },
  btn: {
    backgroundColor: '#5383EC',
    flexDirection: 'row',
    padding: 20,
    width: '94 %',
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    zIndex: 1 
  },
  btnText: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  }
});

export default InputBtns;
