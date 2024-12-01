import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Define the structure of the API response
interface ResponseBody {
    temperature: number;
    condition: string;
    location: string;
    // Add other relevant fields based on your API response
}

// Corrected and enhanced fetchWeatherData function
async function fetchWeatherData(city : string): Promise<ResponseBody> {
    try {
        // Replace 'YOUR_API_KEY' with your actual weather API key
        const API_KEY = 'cc5e50ccf2947060ae850988803ffc3a';
        const response = await fetch(
            `//https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        ;
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;


        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Map the API response to the ResponseBody interface
        const weatherData: ResponseBody = {
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
            location: `${data.city.name}, ${data.city.country}`,
            // Map other fields as necessary
        };

        return weatherData;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

const WeatherApp: React.FC = () => {
    const [weather, setWeather] = useState<ResponseBody | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [city, setCity] = useState<string>('New York'); // Default location
    const [inputLocation, setInputLocation] = useState<string>('');

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await fetchWeatherData(city);
                setWeather(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch weather data');
                setWeather(null);
            }
        };

        getWeather();
    }, [city]);

    const handleFetchWeather = () => {
        if (inputLocation.trim() !== '') {
            setCity(inputLocation.trim());
            setInputLocation('');
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
            </View>

            {error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}

            {weather ? (
                <View style={styles.weatherContainer}>
                    <Text style={styles.locationText}>{weather.location}</Text>
                    <Text style={styles.tempText}>{weather.temperature}°C</Text>
                    <Text style={styles.conditionText}>{weather.condition}</Text>
                    {/* Render other weather details as needed */}
                </View>
            ) : (
                !error && (
                    <View style={styles.loadingContainer}>
                        <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                )
            )}
        </View>
    );
};

export default WeatherApp;

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    errorContainer: {
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
    weatherContainer: {
        alignItems: 'center',
    },
    locationText: {
        fontSize: 24,
        fontWeight: '600',
    },
    tempText: {
        fontSize: 48,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    conditionText: {
        fontSize: 20,
        fontStyle: 'italic',
    },
    loadingContainer: {
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        color: '#555',
    },
});