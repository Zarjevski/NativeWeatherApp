import React, {createContext, useContext, useState, useEffect} from 'react';
import useGeolocation from '../hooks/useGeolocation';
import axiosInstance from '../services/axiosConfig';
import {OPENWEATHER_API_KEY} from '@env';

const WeatherContext = createContext();

const WeatherProvider = ({children}) => {
  // Default coordinates for fallback
  const DEFAULT_COORDINATES = {
    latitude: 30.987804,
    longitude: 34.929741,
  };
  const [units, setUnits] = useState('metric');
  const [coordinates, setCoordinates] = useState(DEFAULT_COORDINATES);
  const [currentWeather, setCurrentWeather] = useState({
    humidity: 0,
    status: 'Clear',
    windSpeed: 0,
    description: 'weather Description',
    temp: 0,
    name: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const {location, error, loading} = useGeolocation();

  const getWeatherData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get('/weather', {
        params: {
          lat: coordinates.latitude,
          lon: coordinates.longitude,
          appid: OPENWEATHER_API_KEY,
          units: units,
        },
      });
      if (response.status === 200) {
        setCurrentWeather({
          humidity: response.data.main.humidity,
          status: response.data.weather[0].main,
          windSpeed: response.data.wind.speed,
          description: response.data.weather[0].description,
          temp: response.data.main?.temp,
          name: response.data.name,
        });
      }
    } catch (err) {
      console.error('Error fetching weather data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      if (location) {
        setCoordinates({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } else if (error) {
        console.error('Error fetching location:', error);
      }
    }
  }, [loading, location, error]);

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates, units]);

  const updateCoordinates = (newLatitude, newLongitude) => {
    setCoordinates({
      latitude: newLatitude,
      longitude: newLongitude,
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        isLoading,
        updateCoordinates,
        coordinates,
        units,
        setUnits,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  return useContext(WeatherContext);
};

export {WeatherProvider, useWeather};
