import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../navigation/NavigationScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
const {height: screenHeight} = Dimensions.get('screen');
interface DetailScreenProps
  extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color="grey" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  imageBorder: {
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    overflow: 'hidden',
    flex: 1,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
