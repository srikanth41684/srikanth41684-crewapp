import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TextInput} from 'react-native';
import {useState} from 'react';

const MakeNotes = () => {
  const [commObj, setCommObj] = useState({
    searchQuery: '',
  });
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
          }}>
          <View
            style={{
              paddingVertical: 20,
            }}>
            <TextInput
              style={{
                borderWidth: 1,
                backgroundColor: '#ffffff',
                height: 40,
                borderRadius: 12,
                paddingLeft: 12,
                borderColor: 'lightgray',
              }}
              placeholder="Search"
              value={commObj.searchQuery}
              onChangeText={text => {
                setCommObj(prev => ({
                  ...prev,
                  searchQuery: text,
                }));
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MakeNotes;
