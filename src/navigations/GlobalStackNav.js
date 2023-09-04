import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

const GlobalStackNav = () => {
  return (
    <MainStack.Navigator>
        
    </MainStack.Navigator>
  );
};

export default GlobalStackNav;
