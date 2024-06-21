import React from 'react';
import {View, TouchableOpacity, useColorScheme} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faDrawPolygon,
  faLocation,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {lightStyles, darkStyles} from './modeToggle.style';

const ModeToggle = ({
  mapMode,
  setMapMode,
  setPolygonCoordinates,
  setMarker,
}: any) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const styles = isDarkMode ? darkStyles : lightStyles;

  const isMarkerActive = mapMode === 'marker';
  const isPolygonActive = mapMode === 'polygon';

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setMapMode('marker')}
          style={[styles.modeButton, isMarkerActive && styles.activeButton]}>
          <FontAwesomeIcon
            icon={faLocation}
            color={isMarkerActive || isDarkMode ? '#fff' : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMapMode('polygon');
          }}
          style={[styles.modeButton, isPolygonActive && styles.activeButton]}>
          <FontAwesomeIcon
            icon={faDrawPolygon}
            color={isPolygonActive || isDarkMode ? '#fff' : '#000'}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setPolygonCoordinates([]);
          setMarker(null);
        }}
        style={[styles.trashButton]}>
        <FontAwesomeIcon icon={faTrash} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
    </View>
  );
};

export default ModeToggle;
