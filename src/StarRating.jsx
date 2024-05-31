import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const StarRating = ({ readOnly, rating, onRate }) => {
  return (
    <Box component="fieldset" borderColor="transparent">
      <Rating
        name="rating"
        value={rating}
        precision={1}
        onChange={(event, newValue) => {
          onRate(newValue);
        }}
        readOnly={readOnly}
      />
    </Box>
  );
};

export default StarRating;