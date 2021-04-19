import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
interface MovieDetailsProps {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({
  movieFull,
  cast,
}) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
