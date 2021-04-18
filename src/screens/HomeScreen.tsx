import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';

const {width: windowWidth} = Dimensions.get('window');

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
      <View style={{height: 440}}>
        <Carousel
          data={movies}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
