import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const TextInputField = ({ placeholder, value, onChangeText }) => {
  return (
    <View>
      <TextInput
        value={value}
        placeholderTextColor="#999"
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.inputField}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: 340,
    marginTop: 40,
    paddingHorizontal: 10,
  },
});

export default TextInputField;
