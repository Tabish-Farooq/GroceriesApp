import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import indianFlag from '../assets/images/indianFlag.png';
import FloatingBtn from './FloatingBtn';

const InputLogin = () => {
  return (
    <View style={Styles.parentContainer}>
      {/* Input with flag and +91 inside */}
      <View style={Styles.inputWrapper}>
        <Image source={indianFlag} style={Styles.flagImg} />
        <Text style={Styles.callCodeTxt}>+91</Text>
        <FloatingBtn/>
        <TextInput
          style={Styles.inputBox}
          keyboardType="number-pad"
        />
        
      </View>

      <TouchableOpacity>
        <Text style={{ color: '#828282', marginTop: 20 }}>
          Or connect with social media
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  parentContainer: {
    position: 'absolute',
    top: 480,
    width: '100%',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  flagImg: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  callCodeTxt: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 8,
  },
  inputBox: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0, // removes unnecessary vertical padding
  },
});

export default InputLogin;
