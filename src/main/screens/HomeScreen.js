import {View, Text} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [commObj, setCommObj] = useState({
    updatedTime: null,
  });
  useEffect(() => {
    setCommObj(prev => ({
      ...prev,
      updatedTime: new Date(),
    }));
  }, []);

  useEffect(() => {
    console.log('commObj--->', commObj.updatedTime);
  }, [commObj]);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Calsio"
        onPress={() => {
          navigation.navigate('calsi');
        }}
      />
      <Button
        title="Make Notes"
        onPress={() => {
          navigation.navigate('notes');
        }}
      />
    </View>
  );
};

export default HomeScreen;
