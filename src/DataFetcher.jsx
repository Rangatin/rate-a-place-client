import { useEffect } from 'react';
import axios from 'axios';
import { API_GATEWAY, API_KEY } from './apiConfig';

const DataFetcher = ({ setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        debugger;
        const response = await axios.get(API_GATEWAY, {
          headers: {
            'x-api-key': API_KEY
          }
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
