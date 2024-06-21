import {StyleSheet} from 'react-native';

export const lightStyles = StyleSheet.create({
  searchContainer: {
    marginBottom: 80,
  },
  autocompleteContainer: {
    width: '100%',
    marginTop: 40,
    zIndex: 99,
  },
  textInputContainer: {
    backgroundColor: '#f0f0f0', // Light gray background
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    height: 40,
    color: '#333', // Dark gray text color
    fontSize: 16,
    backgroundColor: '#fff', // White background
    borderRadius: 5,
    paddingHorizontal: 10,
    elevation: 5,
    position: 'relative',
  },
  listView: {
    backgroundColor: '#fff', // White background
    zIndex: 999,
    position: 'absolute',
    top: 50,
  },
});

export const darkStyles = StyleSheet.create({
  searchContainer: {
    marginBottom: 80,
  },
  autocompleteContainer: {
    width: '100%',
    marginTop: 40,
    zIndex: 99,
  },
  textInputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    height: 40,
    color: '#eee', // Light gray text color
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white
    borderRadius: 5,
    paddingHorizontal: 10,
    elevation: 5,
    position: 'relative',
  },
  listView: {
    backgroundColor: '#222', // Dark background color
    zIndex: 999,
    position: 'absolute',
    top: 50,
  },
});
