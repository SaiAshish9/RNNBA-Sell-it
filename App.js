import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Picker from './components/picker';
import Animations from './components/animations';
import Animations1 from './components/anim2';
import Animations2 from './components/anim3';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        {/* <Picker/> */}
        {/* <Animations1/> */}
        <Animations2 />
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
