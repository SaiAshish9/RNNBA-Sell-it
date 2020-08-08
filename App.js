import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Image, Button} from 'react-native';
import Picker from './components/picker';
import Animations from './components/animations';
import Animations1 from './components/anim2';
import Animations2 from './components/anim3';
import ImagePicker from './components/imagePicker';
import Contacts from './components/contacts';

const App = () => {


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        {/* <Picker />
        <Animations1 />
        <Animations2 />*/}
        <ImagePicker />
        <Contacts />
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

});

export default App;
