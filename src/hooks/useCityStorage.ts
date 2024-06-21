import {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type City = {
  name: string;
  latitude: number;
  longitude: number;
};

type UseCityStorageReturn = {
  searchHistory: City[];
  saveCity: (city: City) => Promise<void>;
  clearSearchHistory: () => Promise<void>;
};

const useCityStorage = (): UseCityStorageReturn => {
  const [searchHistory, setSearchHistory] = useState<City[]>([]);

  // Function to load search history from AsyncStorage
  const loadSearchHistory = useCallback(async () => {
    try {
      const history = await AsyncStorage.getItem('@search_history');
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    } catch (error) {
      console.error('Error loading search history', error);
    }
  }, []);

  // Function to save a new city
  const saveCity = async (city: City) => {
    try {
      // Check if the city is already in the search history
      const cityExists = searchHistory.some(
        item =>
          item.name === city.name ||
          (item.latitude === city.latitude &&
            item.longitude === city.longitude),
      );

      if (!cityExists) {
        const updatedHistory = [city, ...searchHistory];
        setSearchHistory(updatedHistory);
        await AsyncStorage.setItem(
          '@search_history',
          JSON.stringify(updatedHistory),
        );
        await AsyncStorage.setItem('@selected_city', JSON.stringify(city));
      } else {
        console.log('City is already in the search history');
      }
    } catch (error) {
      console.error('Error saving city details', error);
    }
  };

  const clearSearchHistory = async () => {
    try {
      await AsyncStorage.removeItem('@search_history');
      setSearchHistory([]);
    } catch (error) {
      console.error('Error clearing search history', error);
    }
  };

  useEffect(() => {
    loadSearchHistory();
  }, [loadSearchHistory]);

  return {
    searchHistory,
    saveCity,
    clearSearchHistory,
  };
};

export default useCityStorage;
