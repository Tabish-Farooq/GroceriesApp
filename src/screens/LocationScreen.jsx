import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import map from '../assets/images/map.png';
import TextInputField from '../components/TextInputField';
import GreenButton from '../components/GreenButton';
import { useNavigation } from '@react-navigation/native';

const LocationScreen = () => {
  const navigation = useNavigation();

  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.mainContainer}>
            <TouchableOpacity>
              <Image source={map} style={styles.mapImg} />
            </TouchableOpacity>

            <Text style={styles.headingTxt}>Select Your Location</Text>
            <Text style={styles.subHeadingTxt}>
              Switch on your location to stay in tune with
              {'\n'}what’s happening in your area
            </Text>

            <TextInputField
              placeholder="Enter your State"
              value={state}
              onChangeText={setState}
            />

            <TextInputField
              placeholder="Enter your City"
              value={city}
              onChangeText={setCity}
            />

            <GreenButton
              name="Submit"
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  mapImg: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 100,
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 20,
  },
  subHeadingTxt: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '200',
  },
});

export default LocationScreen;
