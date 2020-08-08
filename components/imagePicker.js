import React, {useState} from 'react'

import {View,StyleSheet,Image,Button} from 'react-native';

import ImagePicker from 'react-native-image-picker';

const Pick=()=>{
  const [avatar, setAvatar] = useState('');

  const addAvatar = () => {
    // ImagePicker.launchCamera({},request=>{

    // })

    ImagePicker.launchImageLibrary({}, (req) => {});

    // ImagePicker.showImagePicker({
    //   title:'Select Avatar',
    //   takePhotoButtonTitle:'Take a pretty one!',
    //   chooseFromLibraryButtonTitle:'Really old one?'
    // }, (res) => {
    //   if (res.didCancel) console.warn('really?');
    //   else if (res.error) {
    //     console.warn(res.error);
    //   } else {
    //     setAvatar(res.uri);
    //   }
    // });
  };
  return (
    <View>
      <Image style={styles.avatar} source={{uri: avatar}} />
      <Button title="avatar" onPress={addAvatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default Pick