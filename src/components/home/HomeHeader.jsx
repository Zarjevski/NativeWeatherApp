import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {getCurrentMonthNameAndDate} from '../../utils/getMonth';

const HomeHeader = ({name}) => {
  const date = getCurrentMonthNameAndDate();
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.centerAligned}>
        <Text style={styles.dateText}>{date}</Text>
        <View style={styles.row}>
          <Text style={styles.cityName}>{name}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centerAligned: {
    alignItems: 'center',
  },
  dateText: {
    fontSize: 25,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  cityName: {
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
  },
});

export default HomeHeader;
