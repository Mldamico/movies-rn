import React from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084f6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 10,
        }}
      />
      <Button onPress={fadeIn} title="Fade in" />
      <Button onPress={fadeOut} title="Fade out" />
    </View>
  );
};

const styles = StyleSheet.create({});
