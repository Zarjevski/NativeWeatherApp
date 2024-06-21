// utils/geocode.js
import axios from 'axios';
import {GOOGLE_MAPS_API_KEY} from '@env';

const GOOGLE_GEOCODING_API_URL =
  'https://maps.googleapis.com/maps/api/geocode/json';

export const getCityNameFromCoordinates = async (latitude, longitude) => {
  try {
    const response = await axios.get(GOOGLE_GEOCODING_API_URL, {
      params: {
        latlng: `${latitude},${longitude}`,
        key: GOOGLE_MAPS_API_KEY,
      },
    });
    console.log('aaaa');

    if (response.data.status === 'OK') {
      const results = response.data.results;
      if (results.length > 0) {
        const addressComponents = results[0].address_components;
        const cityComponent = addressComponents.find(
          component =>
            component.types.includes('locality') ||
            component.types.includes('administrative_area_level_1'),
        );
        return cityComponent ? cityComponent.long_name : 'Unknown City';
      }
    }
    return 'Unknown City';
  } catch (error) {
    console.error('Error fetching city name:', error);
    return 'Error fetching city';
  }
};
