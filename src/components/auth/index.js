import React from 'react';
import {View, Text,Button} from 'react-native';



const Auth = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Auth</Text>
      <Button
      title="navigation"
      onPress={()=>{
        navigation.replace("app")
      }}
      />
    </View>
  );
};

export default Auth;
