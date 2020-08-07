import React, {useRef, useEffect} from 'react';
import {View, Animated, Button, Easing} from 'react-native';

const Animations = () => {
//   const redSquare = useRef(new Animated.ValueXY()).current;
const redSquare = useRef(new Animated.Value(1)).current


//   useEffect(() => {
//     Animated.spring(redSquare, {
//       toValue: {x: 100, y: 200},
//       useNativeDriver: false,
//     }).start();
//   }, []);

//   const runAnimation = () => {
//     Animated.timing(redSquare, {
//       toValue: {x: 10, y: 20},
//       duration: 2000,
//       delay: 1000,
//       easing: Easing.elastic(2),
//       useNativeDriver: false,
//     }).start();
//   };

  const runAnimation = () => {
    Animated.timing(redSquare, {
      toValue: 0,
      duration: 2000,
      delay: 1000,
    //   easing: Easing.elastic(2),
      useNativeDriver: false,
    }).start();
  };


  return (
    <>
      <Animated.View
      style={{
          opacity:redSquare
      }}
        // style={redSquare.getLayout()}
        //   style={{
        //     left: redSquare.x,
        //     top: redSquare.y,
        //   }}
      >
        <View style={{backgroundColor: 'red', height: 100, width: 100}} />
      </Animated.View>
      <Button title="run" onPress={runAnimation} />
    </>
  );
};

export default Animations;
