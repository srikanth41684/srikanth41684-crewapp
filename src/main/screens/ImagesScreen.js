import {View, Text} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {TouchableWithoutFeedback} from 'react-native';

const ImagesScreen = () => {
  function selectImagesHandler() {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      console.log(images);
    });
  }
  return (
    <View>
      <Text>ImagesScreen</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          selectImagesHandler();
        }}>
        <View>
          <Text>Select Images</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ImagesScreen;
