import React from 'react';
import {View, Text, FlatList, useColorScheme, StyleSheet} from 'react-native';
import CityCard from '../components/search/CityCard';
import SearchContainer from '../components/search/SearchContainer';
import useCityStorage from '../hooks/useCityStorage';

const SearchScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = isDarkMode ? darkStyles : lightStyles;

  const {searchHistory} = useCityStorage();

  return (
    <View style={styles.container}>
      <SearchContainer />
      <Text style={styles.heading}>Search History</Text>
      {searchHistory.length === 0 ? (
        <Text style={styles.noHistoryText}>No search history yet</Text>
      ) : (
        <FlatList
          data={searchHistory}
          keyExtractor={item => item.name + item.latitude}
          renderItem={({item}) => (
            <CityCard
              name={item.name}
              lat={item.latitude}
              lng={item.longitude}
            />
          )}
          contentContainerStyle={styles.historyContainer}
        />
      )}
    </View>
  );
};

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#121212',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  noHistoryText: {
    fontSize: 16,
    color: '#888',
  },
  historyContainer: {
    paddingBottom: 20,
    backgroundColor: '#1f1f1f',
  },
});

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  noHistoryText: {
    fontSize: 16,
    color: '#aaa',
  },
  historyContainer: {
    paddingBottom: 20,
  },
});

export default SearchScreen;
