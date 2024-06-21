import {useState, useEffect, useCallback} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {Platform, PermissionsAndroid} from 'react-native';

interface LocationState {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
}

const useGeolocation = () => {
  const [location, setLocation] = useState<LocationState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to check and request location permissions.
  const hasLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'ios') {
      const status = await Geolocation.requestAuthorization('whenInUse');
      return status === 'granted';
    }

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }

    return false;
  };

  // Function to get the current location.
  const getCurrentLocation = useCallback(async () => {
    const permissionGranted = await hasLocationPermission();
    if (!permissionGranted) {
      setError('Location permission denied');
      return;
    }

    setLoading(true);
    setError(null);

    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude,
            accuracy: position.coords.accuracy,
            heading: position.coords.heading,
            speed: position.coords.speed,
          },
          timestamp: position.timestamp,
        });
        setLoading(false);
      },
      err => {
        setError(err.message);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return {location, error, loading, refreshLocation: getCurrentLocation};
};

export default useGeolocation;
