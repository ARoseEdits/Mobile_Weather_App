// import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';

// const Weather = ({city}) => {
//     const [weatherData, setWeatherData] = useState(null);
//     const API_KEY = '799d910d15b831d9c04e2c7af42b8483';


//     useEffect(()=>{
//         fetch ( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
//             .then (response=> response.json())
//             .then(response => console.log (response))
//             .then(response => setWeatherData (response))
//             .catch(error => console.error("Error featching the weather data", error));
//     }, [city])

//     return (
//         <div>
//             {weatherData ? (
//                 <div>
//                  <h2> Weather in {city}</h2>
//                  <p> Temperature: {weatherData.main.temp}</p>
//                  <p> Conditions: {weatherData.weather[0].description}</p>
//                  </div>
//       ) : (
//         <p>loading...</p>
//              )}
//         </div>
//     );
// };
// Weather.propTypes = {
//     city: PropTypes.string.isRequired,
//   };
// export default Weather;