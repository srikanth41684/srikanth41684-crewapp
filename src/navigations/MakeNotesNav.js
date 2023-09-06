import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MakeNotes from '../main/screens/MakeNotes';
import NotesDetailsScreen from '../main/screens/NotesDetailsScreen';
import AddNoteScreen from '../main/screens/AddNoteScreen';

const makeNotesStack = createNativeStackNavigator();

const MakeNotesNav = () => {
  return (
    <makeNotesStack.Navigator>
      <makeNotesStack.Screen
        name="notes"
        component={MakeNotes}
        options={{headerShown: false}}
      />
      <makeNotesStack.Screen
        name="notesDetails"
        component={NotesDetailsScreen}
        options={{headerShown: false}}
      />
      <makeNotesStack.Screen
        name="addnotes"
        component={AddNoteScreen}
        options={{headerShown: false}}
      />
    </makeNotesStack.Navigator>
  );
};

export default MakeNotesNav;
