import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Pick = () => {
  const [value, setValue] = useState('ind');

  return (
    <View>
      <Picker
        style={{width: '100%'}}
        selectedValue={value}
        onValueChange={setValue}>
        <Picker.Item value="ind" label="India" />
        <Picker.Item value="nz" label="New Zealand" />
      </Picker>
    </View>
  );
};

export default Pick;
