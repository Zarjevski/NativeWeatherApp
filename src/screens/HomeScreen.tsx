import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useWeather} from '../context/WeatherContext';
import HomeHeader from '../components/home/HomeHeader';
import WeatherStats from '../components/home/WeatherStats';
import IconContainer from '../components/home/IconContainer';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusColors} from '../utils/getStatusColors';

const HomeScreen = () => {
  const {currentWeather, isLoading} = useWeather();
  const color = getStatusColors(currentWeather.status);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <LinearGradient colors={color} style={styles.gradientContainer}>
          <HomeHeader name={currentWeather.name} />
          <IconContainer status={currentWeather.status} />
          <View style={styles.centerAligned}>
            <Text style={styles.temperature}>
              {currentWeather.temp.toFixed()}°
            </Text>
            <Text style={styles.description}>{currentWeather.description}</Text>
          </View>
          <WeatherStats
            wind={currentWeather.windSpeed}
            humidity={currentWeather.humidity}
          />
        </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 50,
    flex: 1,
  },
  centerAligned: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  temperature: {
    fontSize: 120,
    fontWeight: '900',
    color: 'white',
    fontFamily: 'InterBlack',
  },
  description: {
    fontWeight: '400',
    fontSize: 30,
    textTransform: 'capitalize',
    color: 'white',
  },
});

export default HomeScreen;
