import {StyleSheet} from 'react-native';

export const lightStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 999,
    top: 0,
    right: 0,
    left: 0,
    margin: 70,
    borderRadius: 10,
    padding: 10,
    elevation: 5, // Elevation for Android shadow
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  modeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#f00',
  },
  trashButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    backgroundColor: '#121212',
    zIndex: 999,
    top: 0,
    right: 0,
    left: 0,
    margin: 70,
    borderRadius: 10,
    padding: 10,
    elevation: 5, // Elevation for Android shadow
  },
  row: {
    flexDirection: 'row',
  },
  modeButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#f00',
  },
  trashButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
});
