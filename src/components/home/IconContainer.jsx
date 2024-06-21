import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

// Importing weather icons
import Sunny from '../../assets/sunny.png';
import Rainy from '../../assets/rainy.png';
import Cloudy from '../../assets/cloudy.png';
import Snowy from '../../assets/snowy.png';
import Stormy from '../../assets/stormy.png';
import Mist from '../../assets/mist.png';
import Drizzle from '../../assets/drizzle.png';

const IconContainer = ({status}) => {
  // Map status to corresponding icons
  const getIconForStatus = status => {
    switch (status) {
      case 'Clear':
        return Sunny;
      case 'Rain':
        return Rainy;
      case 'Clouds':
        return Cloudy;
      case 'Snow':
        return Snowy;
      case 'Thunderstorm':
        return Stormy;
      case 'Atmosphere':
        return Mist;
      case 'Drizzle':
        return Drizzle;
      default:
        return Sunny; // Default to Sunny if no matching status is found
    }
  };

  const icon = getIconForStatus(status);

  return (
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 300,
    width: 300,
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default IconContainer;
