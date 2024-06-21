import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faWind, faDroplet} from '@fortawesome/free-solid-svg-icons';

const WeatherStats = ({wind, humidity}) => {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <FontAwesomeIcon icon={faDroplet} color="white" size={18} />
        <Text style={styles.valueText}>{humidity}</Text>
        <Text style={styles.statDescription}>Humidity</Text>
      </View>
      <View style={styles.stat}>
        <FontAwesomeIcon icon={faWind} color="white" size={18} />
        <Text style={styles.valueText}>{wind.toFixed()}kmh</Text>
        <Text style={styles.statDescription}>wind</Text>
      </View>
      <View style={styles.stat}>
        <FontAwesomeIcon icon={faDroplet} color="white" size={18} />
        <Text style={styles.valueText}>8</Text>
        <Text style={styles.statDescription}>uv</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255, 0.4)',
    borderRadius: 20,
    marginBottom: 60,
  },
  stat: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  valueText: {
    color: 'white',
    fontSize: 18,
  },
  statDescription: {
    color: '#f1f1f1',
    fontSize: 16,
  },
});

export default WeatherStats;
