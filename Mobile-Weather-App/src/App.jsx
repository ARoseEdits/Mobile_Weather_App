import './App.css'
import React, { useState, useEffect} from'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
// import Weather from './Weather.jsx'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
// import PropTypes from 'prop-types'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Weather = ({city, onDataFetched}) => {
  // const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '799d910d15b831d9c04e2c7af42b8483';
  useEffect(() => {
    if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        onDataFetched(data);  
        // setWeatherData(data);
      })
      .catch(error => console.error("Error fetching the weather data", error));
  }
}, [city, onDataFetched]);

return null;
};
  

function App() {
  const [city, setCity] = useState("London"); // Default city
  const [inputCity, setInputCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleDataFetched = (data) => {
    setWeatherData(data);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCity(inputCity);
    setInputCity(""); // Clear the input after search
  };

  return (
     <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              Local Weather App
            </Typography>
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  placeholder="Search city…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={inputCity}
                  onChange={(e) => setInputCity(e.target.value)}
                />
            </Search>
            <Button type="submit" color="inherit">Search</Button>
            </form>
          </Toolbar>
        </AppBar>
      </Box>

      <Weather city={city} onDataFetched={handleDataFetched} />

         {/* Centered Main Weather Display */}
         {weatherData && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="h4">{weatherData.name}</Typography>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
            />
            <Typography variant="h5">
              {weatherData.main.temp.toFixed(1)}°C, {weatherData.weather[0].main}
            </Typography>
          </div>
        </div>
      )}

      {/* Details Table */}
      <TableContainer component={Paper} style={{ marginTop: '20px', maxWidth: '400px', margin: 'auto' }}>
        <Table aria-label="weather details">
          <TableBody>
            <TableRow>
              <TableCell>Humidity</TableCell>
              <TableCell align="right">{weatherData?.main.humidity}%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Wind Speed</TableCell>
              <TableCell align="right">{weatherData?.wind.speed} m/s</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Chance of Rain</TableCell>
              <TableCell align="right">
                {weatherData?.rain ? `${weatherData.rain["1h"]} mm` : 'N/A'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;