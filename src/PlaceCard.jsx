import React, {useState} from 'react';
import './PlaceCard.css';
import Location from './Location';
import StarRating from './StarRating'
import DataUpdater from './DataUpdater';


const PlaceCard = ({ place, rank }) => {
  const [user_rating, setRating] = useState(0)

  return (
    <div className="place-card">
      <div className="rank">#{rank}</div>
      <div className="place-info">
        <h3>{place.Name}</h3> 
        <h5 className="inline-h5">
          <strong>Average Rating:</strong> {place.AverageRating}
          <div className="gray-text">({place.NumRatings})</div>
        </h5>
        <Location latitude={place.Latitude} longitude={place.Longitude} />
        <hr />
        <div className="para-wrapper">{place.Description}</div>
        <div className="image-box">
          <img src={place.ImageUrl ? place.ImageUrl : '/default_image.png'} alt={place.Name} />
        </div>
        <p>Would <strong>you</strong> recommend this place?</p>
        <DataUpdater placeId={place.PlaceId} averageRating={place.AverageRating} numRatings={place.NumRatings} />
      </div>
    </div>
  );

};

export default PlaceCard;