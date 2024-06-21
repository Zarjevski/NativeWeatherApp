import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useColorScheme} from 'react-native';
import {lightStyles, darkStyles} from './tabBar.styles';

const TabBar = ({state, descriptors, navigation}: any) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.bar]}>
      {state.routes.map(
        (
          route: {key: string | number; name: any; params: any},
          index: React.Key | null | undefined,
        ) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const Icon = options.tabBarIcon
            ? options.tabBarIcon({focused: isFocused})
            : null;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const label = route.name;

          return (
            <TouchableOpacity
              accessibilityRole="button"
              onPress={onPress}
              key={index}
              style={[styles.tab, isFocused && styles.tabFocused]}>
              {Icon ? (
                <View>{Icon}</View>
              ) : (
                <Text style={styles.text}>{label}</Text>
              )}
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
};

export default TabBar;
