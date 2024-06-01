import React, { useState } from 'react';
import PlaceCard from './PlaceCard';

import './PlaceList.css';
import 'leaflet/dist/leaflet.css';
import DataFetcher from './DataFetcher';

const PlaceList = () => {
  const [data, setData] = useState(null);

  return (
    <div className="container mt-4">
      <h2>Top 9 most popular places in Italy</h2>
      <DataFetcher setData={setData} />
      <div className="row">
        {data && Array.isArray(data) ? (
          <>
            {data.map((place, index) => (
              <div key={place.id} className="col-lg-4 col-md-4 col-sm-12 mb-4">
                <PlaceCard rank={index + 1} place={place} />
              </div>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PlaceList;