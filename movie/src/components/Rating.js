import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function Rating({getRating}) {
    const [rating,setRating] = useState(0);
    const onStarClick=(nextValue,preValue,name)=> {
        setRating(nextValue);
        getRating(nextValue);
    }
    return (
        <div>
          <StarRatingComponent starCount={5} value={rating} onStarClick={onStarClick} />   
        </div>
    )
};