import { FavouriteContext } from "../context";
import useLocalStorage from "./../hooks/useLocalStorage";

const FavouritProvider = ({ children }) => {
  const [favourite, setFavourite] = useLocalStorage("favourite", []);

  //add to favorites
  const addToFavoutite = (latitude, longitude, location) => {
    setFavourite([
      ...favourite,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };
  //remove from favorites
  const removeFromFavourite = (location) => {
    const restFavourite = favourite.filter((f) => f.location !== location);
    setFavourite(restFavourite);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourite, addToFavoutite, removeFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouritProvider;

//
//
//
