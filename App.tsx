import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {WeatherProvider} from './src/context/WeatherContext';
import TabNavigator from './src/components/navigation/TabNavigator';

function App() {
  return (
    <WeatherProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </WeatherProvider>
  );
}

export default App;
