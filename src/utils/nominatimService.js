import axios from 'axios';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/";

export const searchLocation = async (query) => {
  const response = await axios.get(`${NOMINATIM_BASE_URL}search`, {
    params: {
      q: query,
      format: "json",
      addressdetails: 1,
    },
  });
  return response.data;
};

export const reverseGeocode = async (lat, lon) => {
  const response = await axios.get(`${NOMINATIM_BASE_URL}reverse`, {
    params: {
      lat,
      lon,
      format: "json",
      addressdetails: 1,
    },
  });
  return response.data;
};
