import pinIcon from "../../assets/pin.svg";

import cloudIcon from "../../assets/cloud.svg";
import hazeIcon from "../../assets/haze.svg";
import snowIcon from "../../assets/icons/snow.svg";
import sunnyIcon from "../../assets/icons/sunny.svg";
import rainyIcon from "../../assets/rainy.svg";
import thunderIcon from "../../assets/thunder.svg";

import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormattedTimeAndDate } from "../../utils/timeAndDate";

const WeatherHeadLine = () => {
  const { weatherData } = useContext(WeatherContext);

  //distructure kore nilam jate bar bar weatherData k use kore na hoy
  const { climate, location, temperature, time } = weatherData;

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return rainyIcon;
      case "Clouds":
        return cloudIcon;
      case "Clear":
        return sunnyIcon;
      case "Snow":
        return snowIcon;
      case "Thunder":
        return thunderIcon;
      case "Fog":
        return hazeIcon;
      case "Haze":
        return hazeIcon;
      case "Mist":
        return hazeIcon;

      default:
        return sunnyIcon;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="Climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {/* {weatherData.temperature} */}
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} />
            <h2 className="text-2xl lg:text-[50px]"> {location} </h2>
          </div>
        </div>
      </div>
      {/* ekhane paramiter a time holo value jeta api theke pacci, 
      sring holo type and api second dicce dekhe false pass korlam karon second amra dekhabo na*/}
      <p className="text-sm lg:text-lg">
        {getFormattedTimeAndDate(time, "time", false)} -{" "}
        {getFormattedTimeAndDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadLine;
