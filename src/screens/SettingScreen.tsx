import React from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {useColorScheme} from 'react-native';
import useCityStorage from '../hooks/useCityStorage';
import {useWeather} from '../context/WeatherContext';

const SettingsScreen = () => {
  const colorScheme = useColorScheme();
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
  const {clearSearchHistory} = useCityStorage();
  // Dummy state to simulate settings
  const [allowLocation, setAllowLocation] = React.useState(true);
  const {units, setUnits} = useWeather();

  const toggleUnits = () => {
    const newUnits = units === 'metric' ? 'imperial' : 'metric';
    setUnits(newUnits);
  };

  return (
    <View style={[styles.container]}>
      <Text style={[styles.heading]}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Allow Location Access</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={allowLocation ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setAllowLocation(!allowLocation)}
          value={allowLocation}
        />
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={clearSearchHistory}>
        <Text style={styles.settingText}>Clear Search History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={toggleUnits}>
        <Text style={styles.settingText}>Units: {units}</Text>
      </TouchableOpacity>
    </View>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
    color: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  settingText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SettingsScreen;
