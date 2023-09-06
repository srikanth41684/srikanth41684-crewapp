import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {TouchableWithoutFeedback} from 'react-native';
import { useState } from 'react';

const AddNoteScreen = () => {
  const [commObj, setCommObj] = useState({
    searchQuery: '',
    data: [],
    modalVisible: false,
    noteTitle: '',
    noteDescription: '',
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
  return (
    <SafeAreaView
      style={{
        flex: 1,
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
    </SafeAreaView>
  );
};

export default AddNoteScreen;
