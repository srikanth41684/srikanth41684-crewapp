import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TextInput} from 'react-native';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import useCreateRequest from '../../customHooks/useCreateRequest';
import {useEffect} from 'react';

const MakeNotes = () => {
  const {getNotesData} = useCreateRequest();
  const [commObj, setCommObj] = useState({
    searchQuery: '',
    data: [],
  });

  useEffect(() => {
    getNotesData()
      .then(res => {
        console.log('res=====>', res);
        setCommObj(prev => ({
          ...prev,
          data: res?.data,
        }));
      })
      .catch(err => {
        console.log('err=====>', err);
      });
  }, []);

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
          {commObj.data.length > 0 ? (
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
              keyExtractor={item => item.id}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                You Don't have any Notes...
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MakeNotes;
