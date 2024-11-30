// import * as Location from 'expo-location';
// import { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';

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
  
// export default WeatherApp;
