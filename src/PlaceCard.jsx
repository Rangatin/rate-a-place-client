import React, {useState} from 'react';
import './PlaceCard.css';
import Location from './Location';
import StarRating from './StarRating'


const PlaceCard = ({ place, rank, onRateClick }) => {
  const [user_rating, setRating] = useState(0)

  return (
    <div className="place-card">
      <div className="rank">#{rank}</div>
      <div className="place-info">
        <h3>{place.name}</h3>
        <h5>[<strong>Rating:</strong> {place.rating}]</h5>
        <Location latitude={place.latitude} longitude={place.longitude} />
        <hr />
        <p>{place.description}</p>
        <div className="image-box">
          <img src={place.imageUrl} alt={place.name} />
        </div>
        <p>Would <strong>you</strong> recommend this place?</p>
        <StarRating rating={user_rating} onRate={setRating} />
        <button onClick={() => onRateClick(place.id, user_rating)}>Rate</button>
      </div>
    </div>
  );

};

export default PlaceCard;