import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';

const MakeNotes = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              lineHeight: 29,
              color: '#000000',
            }}>
            MakeNotes
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#f5fafc',
            paddingHorizontal: 20,
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default MakeNotes;
