import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context";

import clearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import fewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import mistImage from "./assets/backgrounds/mist.jpeg";
import rainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import scatteredCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import snowImage from "./assets/backgrounds/snow.jpg";
import thunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import winterImage from "./assets/backgrounds/winter.jpg";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);

  const [climateImage, setClimateImage] = useState("");

  const getBackgroundImage = (climate) => {
    switch (climate) {
      case "Rain":
        return rainyDayImage;
      case "Clouds":
        return scatteredCloudsImage;
      case "Clear":
        return clearSkyImage;
      case "Snow":
        return snowImage;
      case "Thunder":
        return thunderStormImage;
      case "Fog":
        return winterImage;
      case "Haze":
        return fewCloudsImage;
      case "Mist":
        return mistImage;
      default:
        return clearSkyImage;
    }
  };

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        //add some backgroud calss bg-no-repeat, bg-cover add some syle
        <div
          className="h-screen grid place-items-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${climateImage}')` }}
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
