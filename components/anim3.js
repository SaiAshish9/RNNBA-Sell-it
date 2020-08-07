import React, {useRef} from 'react';
import {View, Animated, Button, Easing, Text, StyleSheet} from 'react-native';

const Animations = () => {
  const redSquare = useRef(new Animated.Value(1)).current;
  const blueSquare = useRef(new Animated.ValueXY(0, 0)).current;
  const greenSquare = useRef(new Animated.ValueXY(0, 0)).current;

  const runAnimation = () => {
    Animated.sequence([
      Animated.timing(redSquare, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.parallel([
        Animated.spring(blueSquare, {
          toValue: {x: 200, y: 100},
          useNativeDriver: false,
        }),
        Animated.spring(greenSquare, {
          toValue: {x: 250, y: 400},
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  return (
    <>
      <Button title="run" onPress={runAnimation} />
      <Animated.View
        style={{
          opacity: redSquare,
        }}>
        <View style={styles.square}></View>
      </Animated.View>
      <Animated.View style={blueSquare.getLayout()}>
        <View style={styles.square1}></View>
      </Animated.View>
      <Animated.View style={greenSquare.getLayout()}>
        <View style={styles.square2}></View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  square: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    marginVertical: 10,
    position: 'absolute',
  },
  square1: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    marginVertical: 10,
    position: 'absolute',
  },
  square2: {
    height: 100,
    width: 100,
    position: 'absolute',
    backgroundColor: 'green',
    marginVertical: 10,
  },
});

export default Animations;
