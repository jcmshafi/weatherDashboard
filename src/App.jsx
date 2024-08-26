import Page from "./Page";
import {
  FavouritProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouritProvider>
          <Page />
        </FavouritProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
