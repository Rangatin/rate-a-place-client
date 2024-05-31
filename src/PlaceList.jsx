import React from 'react';
import PlaceCard from './PlaceCard';

import './PlaceList.css';
import 'leaflet/dist/leaflet.css';

const PlaceList = ({ places, onRateClick }) => {
  return (
    <div className="container m-4">
      <div className="row row-cols-1 row-cols-md-2 
                    row-cols-lg-3 g-4">
        {places.map((place, index) => (
          <div key={place.id} className="col-lg-4 col-md-6 col-sm-12">
            <PlaceCard place={place} rank={index + 1} onRateClick={onRateClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceList;