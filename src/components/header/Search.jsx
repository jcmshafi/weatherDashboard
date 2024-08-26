import { useContext } from "react";
import searchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location";
import { useDebounce } from "../../hooks";

const Search = () => {
  // const [searchTerm, setSearchTerm] = useState();

  const { setSelectedLocation } = useContext(LocationContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(searchTerm);
  //   const fetchedLocation = getLocationByName(searchTerm)
  //   console.log(fetchedLocation);
  //   setSelectedLocation({...fetchedLocation})

  // };

  const doSearch = useDebounce((term) => {
    console.log(term);
    const fetchedLocation = getLocationByName(term);
    console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  const handleOnChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    // <form action="#" onSubmit={handleSubmit}>
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          // onChange={(e) => setSearchTerm(e.target.value)}
          onChange={handleOnChange}
        />
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </div>
    </form>
  );
};

export default Search;
