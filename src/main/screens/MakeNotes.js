import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TextInput} from 'react-native';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import useCreateRequest from '../../customHooks/useCreateRequest';
import {useEffect} from 'react';
import {Modal} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Alert} from 'react-native';

const MakeNotes = ({navigation}) => {
  const {getNotesData, postNotesData, deleteNotes} = useCreateRequest();
  const [commObj, setCommObj] = useState({
    searchQuery: '',
    data: [],
    modalVisible: false,
    noteTitle: '',
    noteDescription: '',
    bgColors: ['#293a4f', '#91162f', 'blue', 'green', '#bb19e3'],
  });
  const [selectedValue, setSelectedValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {label: 'personal', value: 'personal'},
    {label: 'study', value: 'study'},
    {label: 'whishlist', value: 'whishlist'},
    {label: 'work', value: 'work'},
    {label: 'other', value: 'other'},
  ];

  useEffect(() => {
    getNotesHandler();
  }, []);

  // useEffect(() => {
  //   if (commObj.searchQuery !== '') {
  //     let data = [];
  //     commObj.data.filter(item => {
  //       if (
  //         item.title.toUpperCase().includes(commObj.searchQuery.toUpperCase())
  //       ) {
  //         data.push(item);
  //       }
  //     });
  //     console.log('data----->', data);
  //     setCommObj(prev => ({
  //       ...prev,
  //       data: data,
  //     }));
  //   }
  // }, [commObj.searchQuery]);

  const getNotesHandler = () => {
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
  };

  const updateNoteHandler = (title, description, category) => {
    let obj = {
      title: title,
      description: description,
      category: category,
    };
    console.log('updateNoteHandler----->', obj);

    postNotesData(obj)
      .then(res => {
        console.log(res);
        if (res) {
          getNotesHandler();
        }
      })
      .catch(err => {
        console.log(err);
      });
    setCommObj(prev => ({
      ...prev,
      modalVisible: false,
      noteTitle: '',
      noteDescription: '',
    }));
    setSelectedValue(null);
  };

  const longpressHandler = item => {
    Alert.alert(
      'Delete!',
      'Do you want to delete this note',
      [
        {
          text: 'Yes',
          onPress: () => {
            deleteNotes(item.id)
              .then(res => {
                console.log(res);
                if (res) {
                  getNotesHandler();
                }
              })
              .catch(err => {
                console.log(err);
              });
          },
        },
        {
          text: 'No',
          onPress: () => console.log('No button clicked'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  // useEffect(() => {
  //   console.log('commObj------>', commObj);
  // }, [commObj]);

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
            Make Notes
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
              position: 'absolute',
              bottom: 30,
              right: 20,
              zIndex: 5,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                // navigation.navigate('MakeNotesNav', {
                //   screen: 'addnotes',
                // })
                console.log('Yes');
                setCommObj(prev => ({
                  ...prev,
                  modalVisible: !prev.modalVisible,
                }));
              }}>
              <View
                style={{
                  backgroundColor: '#237be8',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#fff',
                  }}>
                  Add Notes..
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
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
              showsVerticalScrollIndicator={false}
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
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate('MakeNotesNav', {
                        screen: 'notesDetails',
                        params: {
                          note: item,
                        },
                      });
                    }}
                    onLongPress={() => {
                      longpressHandler(item);
                    }}>
                    <View
                      style={{
                        width: '48%',
                        backgroundColor:
                          commObj.bgColors[
                            Math.floor(Math.random() * commObj.bgColors.length)
                          ],
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
                          {item.description}
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
        <Modal
          visible={commObj.modalVisible}
          animationType="fade"
          transparent={true}
          style={{
            backgroundColor: 'red',
          }}
          onRequestClose={() => {
            setCommObj(prev => ({
              ...prev,
              modalVisible: !prev.modalVisible,
              noteTitle: '',
              noteDescription: '',
            }));
            setSelectedValue(null);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCommObj(prev => ({
                ...prev,
                modalVisible: !prev.modalVisible,
                noteTitle: '',
                noteDescription: '',
              }));
              setSelectedValue(null);
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'center',
                padding: 20,
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setCommObj(prev => ({
                    ...prev,
                    modalVisible: true,
                  }));
                }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    paddingVertical: 20,
                    borderRadius: 10,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      Add Note
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: 'lightgray',
                      paddingTop: 20,
                    }}></View>
                  <View
                    style={{
                      flexDirection: 'column',
                      gap: 20,
                      paddingTop: 30,
                      paddingHorizontal: 20,
                    }}>
                    <View>
                      <TextInput
                        style={{
                          paddingLeft: 12,
                        }}
                        placeholder="Add Title...."
                        value={commObj.noteTitle}
                        onChangeText={text => {
                          setCommObj(prev => ({
                            ...prev,
                            noteTitle: text,
                          }));
                        }}
                      />
                    </View>
                    <View>
                      <TextInput
                        style={{
                          paddingLeft: 12,
                        }}
                        placeholder="Add Description...."
                        value={commObj.noteDescription}
                        onChangeText={text => {
                          setCommObj(prev => ({
                            ...prev,
                            noteDescription: text,
                          }));
                        }}
                      />
                    </View>
                    <View>
                      <DropDownPicker
                        style={{
                          borderColor: 'lightgray',
                        }}
                        textStyle={{
                          fontSize: 16,
                          textTransform: 'capitalize',
                        }}
                        open={isOpen}
                        value={selectedValue}
                        items={items}
                        setOpen={setIsOpen}
                        setValue={setSelectedValue}
                        setItems={items}
                        placeholder="Select an item"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      paddingTop: 30,
                      paddingHorizontal: 20,
                    }}>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        if (
                          commObj.noteTitle !== '' &&
                          commObj.noteDescription !== '' &&
                          selectedValue !== null
                        ) {
                          updateNoteHandler(
                            commObj.noteTitle,
                            commObj.noteDescription,
                            selectedValue,
                          );
                        }
                      }}>
                      <View
                        style={{
                          backgroundColor:
                            commObj.noteTitle !== '' &&
                            commObj.noteDescription !== '' &&
                            selectedValue !== null
                              ? '#1973e3'
                              : 'lightblue',
                          alignItems: 'center',
                          paddingVertical: 13,
                          borderRadius: 8,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#fff',
                            fontWeight: 'bold',
                          }}>
                          Submit
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default MakeNotes;
