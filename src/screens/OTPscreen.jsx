import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import blurBg from '../assets/images/blurBg.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const OTPscreen = () => {
  const [otp, setOtp] = useState("");
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image source={blurBg} />

      <MaterialCommunityIcons
        name="less-than"
        color="#000"
        size={24}
        style={styles.iconBack}
      />

      <Text style={styles.txtHeading}>Enter your 4-digit code</Text>
      <Text style={styles.codeTxt}>Code</Text>

      <TextInput
        placeholder="_ _ _ _"
        value={otp}
        autoFocus={true}
        keyboardType="number-pad"
        cursorColor="black"
        onChangeText={(text) => setOtp(text)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.fab} onPress={()=>{
        navigation.navigate('MainTabs')
      }}>
        <MaterialCommunityIcons name="greater-than" size={20} color="white" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconBack: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  txtHeading: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    position: 'absolute',
    top: 100,
    left: 50,
  },
  codeTxt: {
    position: 'absolute',
    top: 150,
    fontSize: 20,
    color: '#7C7C7C',
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth:1,
    borderColor:'#E2E2E2',
    paddingHorizontal:20,
    position: 'absolute',
    top: 180,
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
  },
  fab: {
    backgroundColor: '#53B175',
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default OTPscreen;
