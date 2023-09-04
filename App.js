import {View, Text} from 'react-native';
import React from 'react';
import ImagesScreen from './src/main/screens/ImagesScreen';
import {Platform} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {useEffect} from 'react';
import {AppState} from 'react-native';

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
  useEffect(() => {
    const trackUser = AppState.addEventListener('change', nextAppState => {
      console.log('nextAppState---->', nextAppState);

      if (nextAppState === 'active') {
        trackUserLocationHandler();
      }
    });

    return () => {
      trackUser.remove();
    };
  }, []);
  return (
    <View>
      <Text>App</Text>
      <ImagesScreen />
    </View>
  );
};

export default App;
