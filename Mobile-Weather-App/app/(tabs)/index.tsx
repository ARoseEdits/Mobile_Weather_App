import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

// Define the structure of the API response
interface ResponseBody {
    temperature: number;
    condition: string;
    location: string;
}

interface Coordinates {
    latitude: number;
    longitude: number;
}

// Function to fetch weather data by city name
async function fetchWeatherData(city: string): Promise<ResponseBody> {
    try {
        const API_KEY = 'cc5e50ccf2947060ae850988803ffc3a';
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found');
            }
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        const weatherData: ResponseBody = {
            temperature: data.main.temp,
            condition: data.weather[0].description,
            location: `${data.name}, ${data.sys.country}`,
        };

        return weatherData;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// Function to fetch weather data by geolocation
async function fetchWeatherByLocation(latitude: number, longitude: number): Promise<ResponseBody> {
    try {
        const API_KEY = 'cc5e50ccf2947060ae850988803ffc3a';
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        const weatherData: ResponseBody = {
            temperature: data.main.temp,
            condition: data.weather[0].description,
            location: `${data.name}, ${data.sys.country}`,
        };

        return weatherData;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// Main WeatherApp component
const WeatherApp: React.FC = () => {
    const [weather, setWeather] = useState<ResponseBody | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [city, setCity] = useState<string>('');
    const [inputLocation, setInputLocation] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // Function to fetch weather by geolocation
    const getCurrentLocation = async () => {
        try {
            setLoading(true);
            setError(null);

            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                setLoading(false);
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            const weatherData = await fetchWeatherByLocation(latitude, longitude);
            setWeather(weatherData);
        } catch (err) {
            console.error('Error fetching location or weather:', err);
            setError('Failed to fetch weather data for your location');
        } finally {
            setLoading(false);
        }
    };

    // Function to fetch weather by city name
    const handleFetchWeather = async () => {
        if (inputLocation.trim() !== '') {
            try {
                setLoading(true);
                const data = await fetchWeatherData(inputLocation.trim());
                setWeather(data);
                setError(null);
                setInputLocation('');
            } catch (err) {
                setError('Failed to fetch weather data for the given location');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather App</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter location"
                    value={inputLocation}
                    onChangeText={setInputLocation}
                />
                <Button title="Get Weather" onPress={handleFetchWeather} />
                <Button title="Use Current Location" onPress={getCurrentLocation} />
            </View>

            {error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}

            {loading ? (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Fetching weather data...</Text>
                </View>
            ) : weather ? (
                <View style={styles.weatherContainer}>
                    <Text style={styles.locationText}>{weather.location}</Text>
                    <Text style={styles.tempText}>{weather.temperature}°C</Text>
                    <Text style={styles.conditionText}>{weather.condition}</Text>
                </View>
            ) : null}
        </View>
    );
};

export default WeatherApp;

// Styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f8ff',
      justifyContent: 'center',
  },
  title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#333',
      marginBottom: 20,
  },
  inputContainer: {
      marginBottom: 20,
      alignItems: 'stretch',
  },
  input: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 12,
      borderRadius: 8,
      backgroundColor: '#fff',
      fontSize: 16,
      marginBottom: 15,
  },
  buttonContainer: {
      alignItems: 'stretch',
  },
  button: {
      marginBottom: 10,
  },
  weatherContainer: {
      alignItems: 'center',
      marginTop: 30,
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#e6f7ff',
  },
  locationText: {
      fontSize: 22,
      fontWeight: '600',
      color: '#333',
      marginBottom: 10,
  },
  tempText: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#000',
      marginVertical: 10,
  },
  conditionText: {
      fontSize: 18,
      fontStyle: 'italic',
      color: '#555',
  },
  loadingContainer: {
      alignItems: 'center',
      marginTop: 20,
  },
  loadingText: {
      marginTop: 10,
      fontSize: 16,
      color: '#555',
  },
  errorContainer: {
      marginTop: 20,
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#ffe6e6',
  },
  errorText: {
      color: 'red',
      fontSize: 16,
      textAlign: 'center',
  },
});