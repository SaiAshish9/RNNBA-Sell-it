import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Image, Button} from 'react-native';
import Picker from './components/picker';
import Animations from './components/animations';
import Animations1 from './components/anim2';
import Animations2 from './components/anim3';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [avatar, setAvatar] = useState('');

  const addAvatar = () => {
    // ImagePicker.launchCamera({},request=>{

    // })

    ImagePicker.launchImageLibrary({}, req => {});

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
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <Picker />
        <Animations1 />
        <Animations2 />
        <Image style={styles.avatar} source={{uri: avatar}} />
        <Button title="avatar" onPress={addAvatar} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
