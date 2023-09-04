import React from 'react';
import {Platform} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {useEffect} from 'react';
import {AppState} from 'react-native';
import {AppContext} from './src/context/AppContext';
import Geolocation from 'react-native-geolocation-service';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GlobalStackNav from './src/navigations/GlobalStackNav';

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
  const [commAppState, setCommAppState] = useState({
    userLogin: true,
  });

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

  function trackUserLocationHandler() {
    Geolocation.getCurrentPosition(pos => {
      console.log('getCurrentPosition----->', pos);
    });
  }
  return (
    <AppContext.Provider value={{commAppState, setCommAppState}}>
      <NavigationContainer>
        <GlobalStackNav />
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
