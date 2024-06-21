import React, {useState, useEffect} from 'react';
import {View, Text, useColorScheme, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getCityNameFromCoordinates} from '../../utils/geocode';
import {useWeather} from '../../context/WeatherContext';
import {Marker} from 'react-native-maps';
import useCityStorage from '../../hooks/useCityStorage';
import styles from './customMarker.style';

const CustomMarker = ({coordinates}: any) => {
  const [cityName, setCityName] = useState('');
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const {updateCoordinates} = useWeather();
  const {saveCity} = useCityStorage();
  const latitude = coordinates?.latitude;
  const longitude = coordinates?.longitude;

  useEffect(() => {
    if (longitude) {
      const fetchCityName = async () => {
        try {
          const city = await getCityNameFromCoordinates(latitude, longitude);
          setCityName(city);
        } catch (error) {
          console.error('Error fetching city name:', error);
          setCityName('Unknown Location');
        }
      };
      fetchCityName();
    }
  }, [latitude, longitude]);

  const handleSeeWeather = () => {
    saveCity({name: cityName, latitude, longitude});
    updateCoordinates(coordinates.latitude, coordinates.longitude);
    navigation.navigate('Home');
  };

  return (
    <Marker coordinate={coordinates} onPress={handleSeeWeather}>
      <TouchableOpacity>
        <View
          style={[
            styles.markerContainer,
            isDarkMode && styles.markerContainerDark,
          ]}>
          <Text style={[styles.cityText, isDarkMode && styles.cityTextDark]}>
            {cityName}
          </Text>
          <TouchableOpacity
            onPress={handleSeeWeather}
            style={[styles.button, isDarkMode && styles.buttonDark]}>
            <Text style={styles.buttonText}>See Weather</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Marker>
  );
};

export default CustomMarker;
