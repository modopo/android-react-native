import React, { useState } from 'react';
import { StyleSheet, Button, View, Animated, Text } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={10}
        colors="#004777"
        onComplete={() => {
          setIsPlaying(false);
          return { shouldRepeat: true, delay: 0}
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
        <Button title="Pause" onPress={() => setIsPlaying(prev => !prev)} />
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