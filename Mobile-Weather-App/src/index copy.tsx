// import { Text, View, Image, StyleSheet, Platform, ActivityIndicator } from 'react-native';
// import * as Location from 'expo-location';
// import { useEffect, useState } from 'react';
// import { error } from 'console';
// import React from 'react';
// import axios from 'axios';


// //  weather Information API 
// const WeatherApp = () => {
//   const [location, setLocation] = useState<Location.LocationObjectCoords|null>(null);
//   const [errorMsg, setErrorMsg] = useState<string>("");
//   const [textMsg, settextMsg] = useState<string>("waiting...");

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         settextMsg(errorMsg);
//         return;
//       }

//       let loc = await Location.getCurrentPositionAsync({});
//       setLocation(loc.coords); // { latitude, longitude }
//       settextMsg(`Latitude: ${loc.coords.latitude}, Longitude: ${loc.coords.longitude}`);
//     })();
//   }, []);

// // if i change from tsx to jsx the number vaule for latitude and longitude stop working 
// const fetchWeather = async (latitude:number, longitude:number) => {
//     const apiKey = '799d910d15b831d9c04e2c7af42b8483';
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//       return data; // Contains weather information
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }
  
//       let loc = await Location.getCurrentPositionAsync({});
//       setLocation(loc.coords);
  
//       // Fetch weather
//       const weatherData = await fetchWeather(loc.coords.latitude, loc.coords.longitude);
//       console.log(weatherData);
//     })();
//   }, []);

//   return (
//     <View>
//       <Text>{textMsg}</Text>
//     </View>
//   );
// };

// // og working Screen View - no data connection 
// // export default function HomeScreen() {
// //   return (
// //     <View
// //     style={styles.container}
// // >
// //     const Location: () => React.JSX.Element
// //     <Text style={styles.h1}> Location </Text>
// //     {/* give coords */}
// //     <Text style={styles.h1}> {setLocation} </Text>
// //     const WeatherApp: () => React.JSX.Element
// //     <Text style={styles.text}> Weather Condition </Text>
// //     {/* fetch thedata from openWeatherAPI for the below condition*/}
// //     <Text style={styles.text}> {WeatherApp} </Text>
// //     {/* <Location = require("../../Mobile-Weather-App\components\geolocation.tsx") */}
// //     <Text style={styles.text}>Temperature</Text>
// //     <Text style={styles.text}>Humidity</Text>
// //     <Text style={styles.text}>Conditions</Text>
// // //     </View> 
// // )}


// // below didn't work because the two const items were already declared
// // const WeatherApp: () => React.JSX.Element = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.h1}>Weather App</Text>
// //       <Text>Welcome! Check today's weather.</Text>
// //     </View>
// //   );
// // };
// // const Location: () => React.JSX.Element = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.h1}>Location Coordinates</Text>
// //     </View>
// //   );
// // };

// // below is the attempt the use the fetch funtion the rechieve the data
// function fetch (Temperature, condition) {WeatherApp}: Promise<Response.body> (+2 overloads)


// // Connecting the APi to the Screen View- didn't work, not using view funtion, needs view funtion to show up of screeen? not actully connected to the weather API 
// type GetContentProps = {
//   loading: boolean;
//   error: boolean;
//   response: {temp, weather} 
// };

// const getContent = ({ loading, error, response }: GetContentProps): JSX.Element => {
//   if (loading) {
//     return <ActivityIndicator size="large" />;
//   }

//   if (error) {
//     return <Text>Oops... where are you?</Text>;
//   }

//   console.log(response);

//   return <Text>Today's Weather</Text>;
// };

// export default getContent;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "lightblue",
//   },

//   text:{
//     color: "darkblue", 
//     fontFamily: "helvetica"
//   },

//   h1: {
//     fontSize: 24,
//     color: "darkblue", 
//     fontFamily: "helvetica"
//   }
// })