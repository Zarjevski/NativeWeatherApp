import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  markerContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  markerContainerDark: {
    backgroundColor: '#333',
    shadowColor: '#fff',
  },
  cityText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  cityTextDark: {
    color: 'white',
  },
  button: {
    backgroundColor: '#f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonDark: {
    backgroundColor: '#bb86fc',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
