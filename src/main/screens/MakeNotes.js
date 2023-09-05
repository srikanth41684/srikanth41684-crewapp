import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TextInput} from 'react-native';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';

const MakeNotes = () => {
  const [commObj, setCommObj] = useState({
    searchQuery: '',
    data: [
      {
        id: 1,
        title: 'Test',
        category: 'personal',
        discription:
          'Helo ahuid diuhdjs dsfcbsduivcsf vfivf vfhvbfv fvbfbvds doncdoc dcbwrief iucvsdn.',
      },
      {
        id: 2,
        title: 'Test2',
        category: 'personal',
        discription:
          'Helo ahuid diuhdjs dsfcbsduivcsf vfivf vfhvbfv fvbfbvds doncdoc dcbwrief iucvsdn.',
      },
      {
        id: 3,
        title: 'Test3',
        category: 'personal',
        discription:
          'Helo ahuid diuhdjs dsfcbsduivcsf vfivf vfhvbfv fvbfbvds doncdoc dcbwrief iucvsdn.',
      },
      {
        id: 4,
        title: 'Test4',
        category: 'personal',
        discription:
          'Helo ahuid diuhdjs dsfcbsduivcsf vfivf vfhvbfv fvbfbvds doncdoc dcbwrief iucvsdn.',
      },
    ],
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
          <FlatList
            data={commObj.data}
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: 'column',
              rowGap: 15,
            }}
            columnWrapperStyle={{
              columnGap: 15,
            }}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <TouchableWithoutFeedback>
                  <View
                    style={{
                      width: '48%',
                      backgroundColor: '#293a4f',
                      borderRadius: 8,
                      paddingHorizontal: 8,
                      paddingVertical: 5,
                    }}>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 22,
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 14,
                        fontWeight: 'normal',
                        textTransform: 'capitalize',
                      }}>
                      {item.category}
                    </Text>
                    <View
                      style={{
                        paddingTop: 10,
                      }}>
                      <Text
                        numberOfLines={4}
                        ellipsizeMode="tail"
                        style={{
                          color: '#ffffff',
                          fontSize: 16,
                          fontWeight: 'normal',
                        }}>
                        {item.discription}
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MakeNotes;
