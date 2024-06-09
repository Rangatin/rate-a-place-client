import { useEffect } from 'react';
import axios from 'axios';
import { VITE_HOST } from './apiConfig';

const DataFetcher = ({ setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${VITE_HOST}/places`, {
        });
        const parsedData = JSON.parse(response.data.body);
        const sortedData = parsedData.sort((a, b) => {
          // sort by average rating
          return b.AverageRating - a.AverageRating;
        })
        setData(sortedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setData]);

  return null; // Since this component only handles side effects, doesn't render anything
};

export default DataFetcher;
