import React, {useRef} from 'react';
import {View, Animated, Button, Easing,Text} from 'react-native';

const Animations = () => {
  const redSquare = useRef(new Animated.Value(1)).current;

  const runAnimation = () => {
    Animated.timing(redSquare, {
      toValue: 0,
      duration: 2000,
      delay: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Animated.Text
        style={{
          opacity: redSquare,
          //   left: redSquare.interpolate({
          //       inputRange: [0,1],
          //       outputRange: [300,0]
          //   })
          // transform:[
          //     {
          //         rotateX:redSquare.interpolate({
          //             inputRange: [0,0.5,1],
          //             outputRange: ['0deg','180deg','0deg']
          //         })
          //     }
          // ]
          fontSize: redSquare.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [20, 5, 30],
          }),
        }}>
        <Text style={{}}>hi</Text>
        {/* <View style={{backgroundColor: 'red', height: 100, width: 100}} /> */}
      </Animated.Text>
      <Button title="run" onPress={runAnimation} />
    </>
  );
};

export default Animations;
