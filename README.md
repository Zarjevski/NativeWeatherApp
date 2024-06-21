![alt text](https://github.com/Zarjevski/NativeWeatherApp/blob/main/src/assets/cover.png)


# WeatherApp 🌤️

WeatherApp is a comprehensive weather application designed to provide real-time weather information based on your current location or any place you search for. It integrates several APIs to offer accurate weather forecasts and intuitive map interactions. The app supports dark mode for a comfortable viewing experience.

## Installation Instructions

**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Zarjevski/NativeWeatherApp
   ```

2. **Navigate to the Project Directory**:
   ```sh
   cd NativeWeatherApp
   ```

3. **Install Dependencies:**:
   ```sh
   npm install
   ```

4. **Configure API Keys:**:
   - Create a .env file in the root directory of the project.
   - Add the following lines to the .env file and replace your_key with your actual API keys:
   ```sh
      GOOGLE_MAPS_API_KEY=your_key
      OPENWEATHER_API_KEY=your_key
   ```

5. **Run the App:**:
   ```sh
      npm start
   ```

# Features

### View Current Weather:
- Automatically get the current weather based on your location upon startup.

### Weather from Selected Places:
- Place markers on the map to select specific locations and view their weather details.

### Search for Places:
- Use the search functionality to find any place and view its weather. You can also visualize these places on the map.

### Dark Mode:
- The app supports dark mode, adapting to your system settings for a better user experience.

### Save Cities:
- Save cities along with their coordinates in local storage, allowing quick access to frequently viewed places.

# APIs
WeatherApp leverages the following APIs to deliver its features:

1. **Google Places API**:
- Used for searching and autocompleting specific places.

2. **Google Geocoding API**:
- Fetches city names for custom markers based on latitude and longitude coordinates.

3. **OpenWeather API**:
- Provides detailed weather information for any given coordinates.

4. **Google Maps API**:
- Integrates map functionalities for viewing current locations, selecting places on the map, and visualizing searched locations.

# Usage

### Allow Location Permission:

When you first launch the app, it will request permission to access your location. Please grant this permission for location-based weather updates. You can also manage this permission in the app's settings later.

### Search for Custom Locations:

Navigate to the search screen to find and view weather information for specific locations. You can also display these locations on the map.

### Map Interactions:

Go to the map screen to place custom markers on any selected area. Once a marker is placed, press the "View Weather" button to get the weather details for that location.

### Contact

For any questions, assistance, or feedback, please contact me at zarzevskivictor@gmail.com.

Thank you for using WeatherApp! We hope it helps you stay informed and prepared for any weather conditions.