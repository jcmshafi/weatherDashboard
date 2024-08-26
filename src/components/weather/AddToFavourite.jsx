import heartRedIcon from "../../assets/heart-red.svg";
import heartIcon from "../../assets/heart.svg";

import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../context";

const AddToFavourite = () => {
  const [isFavorite, toggleFavorite] = useState(false);

  const { favourite, addToFavoutite, removeFromFavourite } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  //handle favorites
  const handleFavourite = () => {
    const found = favourite.find((fav) => fav.location === location);

    if (!found) {
      addToFavoutite(latitude, longitude, location);
    } else {
      removeFromFavourite(location);
    }
    toggleFavorite(!isFavorite);
  };

  useEffect(() => {
    const found = favourite.find((fav) => fav.location === location);
    //found return true or false
    toggleFavorite(found);
  }, []);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#bdbdbd4e]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? heartRedIcon : heartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
