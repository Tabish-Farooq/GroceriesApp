import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import WelcomeScreen from './src/screens/WelcomeScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import OnboardingScreenTwo from './src/screens/OnboardingScreenTwo'
import OTPscreen from './src/screens/OTPscreen'
import LocationScreen from './src/screens/LocationScreen'
import MainScreen from './src/screens/MainScreen'
import BottomTabNavigation from './src/Navigation/BottomTabNavigation'
import ProductDetailScreen from './src/screens/ProductDetailScreen'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'



const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar hidden/>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='OnboardingScreenTwo' component={OnboardingScreenTwo} options={{headerShown:false}}/>
        <Stack.Screen name='OTPscreen' component={OTPscreen} options={{headerShown:false}}/>
        <Stack.Screen name='LocationScreen' component={LocationScreen} options={{headerShown:false}}/>
        <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>
         <Stack.Screen name="MainTabs" component={BottomTabNavigation} options={{ headerShown: false }} />
         <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    </Provider>
  )
}

export default App