import React, { useState } from 'react';
import { StyleSheet, Button, View, Animated, Text } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={10}
        colors="#004777"
        onComplete={() => {
          console.log('ON_COMPLETE BEFORE RETURN')
          return [true, 0]
        }}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text
            style={{ ...styles.remainingTime, color: animatedColor }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
      {isPlaying ?
        <Text>Wave your hand over the light sensor!</Text>
        :
        <Button title="Start" onPress={() => setIsPlaying(prev => !prev)} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  remainingTime: {
    fontSize: 46,
  },
});