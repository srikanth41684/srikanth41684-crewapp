import {View, Text} from 'react-native';
import React from 'react';
import ImagesScreen from './src/main/screens/ImagesScreen';
import {Platform} from 'react-native';
import {PermissionsAndroid} from 'react-native';

if (Platform.OS === 'android') {
  let permissions = [
    PermissionsAndroid.PERMISSIONS.CALL_PHONE,
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    PermissionsAndroid.PERMISSIONS.CAMERA,
  ];

  PermissionsAndroid.requestMultiple(permissions).then(p => {
    console.log('permissions----->', p);
  });
}

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <ImagesScreen />
    </View>
  );
};

export default App;
