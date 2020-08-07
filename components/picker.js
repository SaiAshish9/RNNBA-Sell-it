import React, {useState} from 'react';
import {View,Slider,ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-community/picker';
// import {Slider} from '@react-native-community/slider';

const Pick = () => {
  const [value, setValue] = useState('ind');

  return (
    <View>
      <Picker
        style={{width: 300,height:100}}
        selectedValue={value}
        onValueChange={setValue}>
        <Picker.Item value="ind" label="India" />
        <Picker.Item value="nz" label="New Zealand" />
      </Picker>
      <Slider
      value={72}
      minimumValue={100}
      maximumValue={200}
      step={1}
      onValueChange={x=>alert(x)}
      />
      <ActivityIndicator
      size="large"
      hidesWhenStopped
      color="red"
      animating
      />
    </View>
  );
};

export default Pick;
