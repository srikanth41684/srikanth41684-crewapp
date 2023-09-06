import {View, Text} from 'react-native';
import React from 'react';
import {useEffect} from 'react';

const NotesDetailsScreen = props => {
  useEffect(() => {
    console.log('props=====>', props.route.params.note);
  }, []);
  return (
    <View>
      <Text>NotesDetailsScreen</Text>
    </View>
  );
};

export default NotesDetailsScreen;
