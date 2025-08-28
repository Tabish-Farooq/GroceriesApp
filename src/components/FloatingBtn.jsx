import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingBtn = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.fab}  onPress={()=>{
        navigation.navigate("OTPscreen")
    }}>
      <MaterialCommunityIcons name="greater-than" size={20} style={styles.fabIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#53B175',
    width: 40,
    height: 40,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    position: 'absolute',
    right: 10,
    bottom: 5,
    zIndex: 10,
  },
  fabIcon: {
    color: 'white',
  },
});

export default FloatingBtn;
