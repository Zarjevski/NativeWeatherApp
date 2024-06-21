import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useColorScheme} from 'react-native';
import {
  faMap,
  faHome,
  faGear,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import HomeScreen from '../../screens/HomeScreen';
import MapScreen from '../../screens/MapScreen';
import SettingScreen from '../../screens/SettingScreen';
import SearchScreen from '../../screens/SearchScreen';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const size = 32;

const TabNavigator = () => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#FFFAFA' : '#0b1215';
  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        headerTransparent: true,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faHome} size={size} color={color} />
          ),
          tabBarActiveTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faMap} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faSearch} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faGear} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
