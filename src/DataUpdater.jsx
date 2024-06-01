import { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating';

const DataUpdater = ({ placeId, averageRating, numRatings }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); // State for success dialog visibility
    const [user_rating, setRating] = useState(false);
    const [starRatingReadOnly, setReadOnly] = useState(false);

    const API_GATEWAY = process.env.API_GATEWAY_HOST

    const calcNewRating = () => {

        const calcultednewRating = (averageRating * numRatings + user_rating) / (numRatings + 1);
        const roundedNewRating = calcultednewRating.toFixed(2);
        // Update data with the calculated rating
        updateData({
            PlaceId: placeId,
            AverageRating: typeof roundedNewRating !== 'undefined' ? roundedNewRating : averageRating,
            NumRatings: numRatings + 1
        });
    };

    const updateData = async (data) => {
        try {
            debugger;
            const response = await axios.patch(API_GATEWAY, {
                body: JSON.stringify(data),
            });
            setIsButtonDisabled(true);
            setRating(0);
            setReadOnly(true);
            console.log('Update successful:', response.data);
            alert("Rating upload sucessful!");
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div>
            <StarRating rating={user_rating} onRate={setRating} readOnly={starRatingReadOnly} />
            <button onClick={calcNewRating} disabled={isButtonDisabled}>
                Rate
            </button>
        </div>

    );
};

export default DataUpdater;