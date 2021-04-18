import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';

export const HomeScreen = () => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then(resp => {});
  }, []);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
