import React from 'react';
import {View, useColorScheme} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {useWeather} from '../../context/WeatherContext';
import {useNavigation} from '@react-navigation/native';
import {lightStyles, darkStyles} from './searchContainer.styles';
import useCityStorage from '../../hooks/useCityStorage';

const SearchContainer = () => {
  const {updateCoordinates} = useWeather();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const {saveCity} = useCityStorage();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  const handleSelectCity = async (data: any, details: any) => {
    // Extracting the city name and coordinates
    const cityName = data.description;
    const {lat, lng} = details.geometry.location;
    const newCity = {name: cityName, latitude: lat, longitude: lng};
    updateCoordinates(lat, lng);
    saveCity(newCity);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        placeholder="Search for a city"
        onPress={handleSelectCity}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
          types: '(cities)',
        }}
        fetchDetails={true}
        styles={{
          container: styles.autocompleteContainer,
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
          listView: styles.listView,
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
      />
    </View>
  );
};

export default SearchContainer;
