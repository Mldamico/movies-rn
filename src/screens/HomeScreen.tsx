import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {movies, loading} = useMovies();
  const {top} = useSafeAreaInsets();
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View style={{marginTop: top}}>
      <MoviePoster movie={movies[0]} />
    </View>
  );
};

const styles = StyleSheet.create({});
