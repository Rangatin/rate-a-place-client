import React from 'react';
import PlaceCard from './PlaceCard';

import './PlaceList.css';
import 'leaflet/dist/leaflet.css';

const PlaceList = ({ places, onRateClick }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://juedt3by5i.execute-api.eu-north-1.amazonaws.com/dep/places`, {
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          },
          queryStringParameters: { // Use params for query string parameters
            TableName: "Places", // Adjust if your Lambda expects a different name
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <p> DADA</p>
      {data ? (
        <p>{data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlaceList;