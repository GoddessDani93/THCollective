import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (value) => {
        setRating(value);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleClick(star)}
                    style={{
                        cursor: 'pointer',
                        color: star <= rating ? '#ffc107' : '#e4e5e9',
                        fontSize: '2rem',
                    }}
                >
                    ★
                </span>
            ))}
            <p>Rating: {rating} out of 5</p>
        </div>
    );
};

export default StarRating;