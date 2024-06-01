import { useEffect } from 'react';
import axios from 'axios';

const DataFetcher = ({ setData }) => {
  const API_GATEWAY = process.env.API_GATEWAY_HOST

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_GATEWAY);
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

  return null; // Since this component only handles side effects, it doesn't render anything
};

export default DataFetcher;
