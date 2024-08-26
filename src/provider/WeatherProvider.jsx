import { WeatherContext } from "../context";

import {useWeather} from '../hooks'


const WeatherProvider = ({ children }) => {
    //hooks give these value
    const {weatherData, error, loading} = useWeather()
  return (
    //pass value in context
  <WeatherContext.Provider value= {{weatherData, error, loading}} >
    {children}
  </WeatherContext.Provider>
  )
};

export default WeatherProvider;
