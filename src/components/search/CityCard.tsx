import React from 'react';
import {TouchableOpacity, Text, StyleSheet, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useWeather} from '../../context/WeatherContext';

const CityCard = ({
  name,
  lat,
  lng,
}: {
  name: string;
  lat: number;
  lng: number;
}) => {
  const navigation = useNavigation();
  const {updateCoordinates} = useWeather();
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  const onPress = () => {
    updateCoordinates(lat, lng);
    navigation.navigate('Home');
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cityName}>{name}</Text>
    </TouchableOpacity>
  );
};

const lightStyles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

const darkStyles = StyleSheet.create({
  card: {
    backgroundColor: '#333',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CityCard;
