import React from 'react';
import PropTypes from 'prop-types';

const ReviewPage = ({ reviews }) => {
    return (
        <div>
            <h1>Review Ratings</h1>
            {reviews.length === 0 ? (
                <p>No reviews available.</p>
            ) : (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <h3>{review.title}</h3>
                            <p>{review.content}</p>
                            <p>Rating: {review.rating}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

ReviewPage.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    })).isRequired,
};

export default ReviewPage;