import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import {useWeather} from '../context/WeatherContext';
import {useColorScheme} from 'react-native';
import darkStyle from '../components/map/darkStyle.json';
import lightStyle from '../components/map/lightStyle.json';
import CustomMarker from '../components/map/CustomMarker';
import ModeToggle from '../components/map/ModeToggle';

const MapScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const {coordinates} = useWeather();
  const [mapMode, setMapMode] = useState('marker');
  const latitude = coordinates.latitude;
  const longitude = coordinates.longitude;
  const [polygonCoordinates, setPolygonCoordinates] = useState<
    Array<{latitude: number; longitude: number}>
  >([]);

  const [region, setRegion] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [marker, setMarker] = useState({
    latitude: latitude,
    longitude: longitude,
  });

  useEffect(() => {
    setRegion(prevRegion => ({
      ...prevRegion,
      latitude,
      longitude,
    }));
    setMarker({
      latitude,
      longitude,
    });
  }, [latitude, longitude]);

  const handleMapPress = (event: {nativeEvent: {coordinate: any}}) => {
    const {coordinate} = event.nativeEvent;
    if (mapMode === 'marker') {
      setMarker({
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      });
    } else if (mapMode === 'polygon') {
      setPolygonCoordinates([...polygonCoordinates, coordinate]);
    }
  };

  return (
    <View style={styles.fullScreen}>
      <ModeToggle
        setMapMode={setMapMode}
        setPolygonCoordinates={setPolygonCoordinates}
        setMarker={setMarker}
        mapMode={mapMode}
      />
      <MapView
        style={styles.fullScreen}
        initialRegion={region}
        region={region}
        customMapStyle={isDarkMode ? darkStyle : lightStyle}
        onRegionChangeComplete={newRegion => setRegion(newRegion)}
        onPress={handleMapPress}>
        {marker ? <CustomMarker coordinates={marker} /> : null}
        {polygonCoordinates.length > 0 && (
          <Polygon
            coordinates={polygonCoordinates}
            fillColor="rgba(0, 200, 0, 0.5)"
            strokeColor="rgba(0, 0, 0, 0.5)"
            strokeWidth={2}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});

export default MapScreen;
