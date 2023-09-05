import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from '../main/screens/LogInScreen';
import {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import HomeScreen from '../main/screens/HomeScreen';
import Calculator from '../main/screens/Calculator';
import MakeNotes from '../main/screens/MakeNotes';

const MainStack = createNativeStackNavigator();

const GlobalStackNav = () => {
  const {commAppState, setCommAppState} = useContext(AppContext);
  return (
    <MainStack.Navigator>
      {commAppState.userLogin ? (
        <>
          <MainStack.Screen
            name="home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="calsi"
            component={Calculator}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="notes"
            component={MakeNotes}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <MainStack.Screen
          name="login"
          component={LogInScreen}
          options={{headerShown: false}}
        />
      )}
    </MainStack.Navigator>
  );
};

export default GlobalStackNav;
