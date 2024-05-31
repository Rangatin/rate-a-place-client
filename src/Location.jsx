import React, { useState, useEffect, useMemo } from 'react';
import { reverseGeocode } from './utils/nominatimService';

const Location = ({ latitude, longitude }) => {
  const [cachedLocation, setCachedLocation] = useState({});

  useEffect(() => {
    const fetchAddress = async () => {
      if (latitude && longitude) {
        try {
          const response = await reverseGeocode(latitude, longitude);
          setCachedLocation({ latitude, longitude, address: response.display_name });
        } catch (error) {
          console.error('Error fetching address:', error);
        }
      }
    };

    if (!cachedLocation.address) {
      fetchAddress();
    }
  }, [latitude, longitude, cachedLocation.address]); // Dependency on lat, lng, and cachedLocation.address

  const address = useMemo(() => {
    return cachedLocation.address || "unknown";
  }, [cachedLocation]);

  return (
    <div className="location">
      <p><strong>Location:</strong> {address}</p>
    </div>
  );
};

export default Location;
