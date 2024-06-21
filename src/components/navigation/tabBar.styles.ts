import {StyleSheet} from 'react-native';

export const lightStyles = StyleSheet.create({
  bar: {
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 90,
    gap: 12,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(253, 253, 253, 0.9)',
    borderTopColor: 'gray',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: 100,
  },
  text: {
    color: 'black',
  },
  tabFocused: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export const darkStyles = StyleSheet.create({
  bar: {
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 90,
    gap: 12,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
    borderTopColor: 'rgba(60, 60, 60, 0.9)',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: 100,
  },
  text: {
    color: 'white',
  },
  tabFocused: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
