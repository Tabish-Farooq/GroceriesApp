import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import FavouriteSCreen from '../screens/FavouriteSCreen';
import AccountScreen from '../screens/AccountScreen';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Bottom = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#53B175', // Selected icon ka color
        tabBarInactiveTintColor: '#000', // Unselected icon ka color
        headerShown: false,
      }}
    >
      <Bottom.Screen
        name="Shop"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
             <Feather name="home" color={color} size={24} />
          ),
        }}
      />
      <Bottom.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
           <Feather name="search" color={color} size={22} />
          ),
        }}
      />
      <Bottom.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={24} />
          ),
        }}
      />
      <Bottom.Screen
        name="Favourite"
        component={FavouriteSCreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={22} />
          ),
        }}
      />
      <Bottom.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={24} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomTabNavigation;
