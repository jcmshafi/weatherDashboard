const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Dhaka",
    latitude: 23.810331,
    longitude: 90.412521,
  },
  {
    location: "Kolkata",
    latitude: 22.572645,
    longitude: 88.363892,
  },
  {
    location: "New York",
    latitude: 40.712776,
    longitude: -74.005974,
  },
  {
    location: "Tokyo",
    latitude: 35.682839,
    longitude: 139.759455,
  },
  {
    location: "Sydney",
    latitude: -33.86882,
    longitude: 151.209296,
  },
  {
    location: "Paris",
    latitude: 48.856613,
    longitude: 2.352222,
  },
  {
    location: "Toronto",
    latitude: 43.65107,
    longitude: -79.347015,
  },
  {
    location: "Moscow",
    latitude: 55.755825,
    longitude: 37.617298,
  },
  {
    location: "Dubai",
    latitude: 25.276987,
    longitude: 55.296249,
  },
];

const getLocations = () => {
  return data;
};

const getLocationByName = (location) => {
  if (!location) return null;

  // const filtered = data.filter((item) => item.location === location);
  const filtered = data.filter(
    //add case insensitive
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
};

export { getLocationByName, getLocations };
