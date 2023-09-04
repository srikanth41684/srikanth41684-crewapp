import {View, Text} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {TouchableWithoutFeedback} from 'react-native';

const ImagesScreen = () => {
  function selectImagesHandler() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
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
