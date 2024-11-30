// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import WeatherData from './Geolocation.tsx';

// // const API_KEY = 'YOUR_API_KEY'; // Replace with your weather API key
// // const CITY = 'London'; // Replace with the desired city

// type WeatherData = {
//   temp: number;
//   weather: string;
//   description: string;
// };

// export default function WeatherViewer() {
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
//         );
//         const data = response.data;
//         setWeather({
//           temp: data.main.temp,
//           weather: data.weather[0].main,
//           description: data.weather[0].description,
//         });
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading weather data...</Text>
//       </View>
//     );
//   }

//   if (!weather) {
//     return (
//       <View style={styles.container}>
//         <Text>Could not fetch weather data. Please try again later.</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Weather in {CITY}</Text>
//       <Text style={styles.temp}>{weather.temp}°C</Text>
//       <Text style={styles.weather}>{weather.weather}</Text>
//       <Text style={styles.description}>{weather.description}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#e0f7fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   temp: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     color: '#00796b',
//   },
//   weather: {
//     fontSize: 20,
//     marginVertical: 5,
//   },
//   description: {
//     fontSize: 16,
//     color: '#004d40',
//   },
// });
