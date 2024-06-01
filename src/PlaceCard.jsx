import React, {useState, useEffect} from 'react';
import './PlaceCard.css';
import Location from './Location';
import DataUpdater from './DataUpdater';

import { API_GATEWAY, API_KEY } from './apiConfig';

const PlaceCard = ({ place, rank }) => {
  const [fetchedData, setFetchedData] = useState(place); // Store fetched data initially
  const [isRatingUpdated, setIsRatingUpdated] = useState(false); // Track rating update state

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_GATEWAY}places?PlaceId=${place.PlaceId}`, {
        headers: {
          'x-api-key': API_KEY
        }
      }); 
      setFetchedData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  const handleRatingUpdateSuccess = (updatedRatingData) => {
    // Update state with updated rating data for this card
    setFetchedData({ ...fetchedData, ...updatedRatingData });
    setIsRatingUpdated(true); 
  };


  return (
    <div className="place-card">
      <div className="rank">#{rank}</div>
      <div className="place-info">
        <h3>{place.Name}</h3> 
        <h5 className="inline-h5">
          <strong>Average Rating:</strong> {isRatingUpdated ? fetchedData.AverageRating : place.AverageRating}
          <div className="gray-text">({isRatingUpdated ? fetchedData.NumRatings : place.NumRatings})</div>
        </h5>
        <Location latitude={place.Latitude} longitude={place.Longitude} />
        <hr />
        <div className="para-wrapper">{place.Description}</div>
        <div className="image-box">
          <img src={place.ImageUrl ? place.ImageUrl : '/default_image.png'} alt={place.Name} />
        </div>
        <p>Would <strong>you</strong> recommend this place?</p>
        <DataUpdater 
          placeId={place.PlaceId} 
          averageRating={place.AverageRating} 
          numRatings={place.NumRatings}
          onSuccess={handleRatingUpdateSuccess} />
      </div>
    </div>
  );

};

export default PlaceCard;