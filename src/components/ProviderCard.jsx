import React from 'react';
import PropTypes from 'prop-types';
import './ProviderCard.css'; // Assuming you have a CSS file for styling

const ProviderCard = ({
  name,
  specialty,
  location,
  licenseType,
  yearsOfExperience,
  bio,
  averageRating,
  reviewCount,
  isTransAfirming,
}) => {
  return (
    <div className="provider-card">
      <h2 className="provider-name">{name}</h2>
      <p className="provider-specialty">Specialty: {specialty}</p>
      <p className="provider-location">Location: {location}</p>
      <p className="provider-license">License Type: {licenseType}</p>
      <p className="provider-experience">Years of Experience: {yearsOfExperience}</p>
      <p className="provider-bio">Bio: {bio}</p>
      <p className="provider-rating">Average Rating: {averageRating}</p>
      <p className="provider-reviews">Reviews: {reviewCount}</p>
      <p className="provider-trans-status">Trans Affirming: {isTransAfirming ? 'Yes' : 'No'}</p>
    </div>
  );
};

ProviderCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  licenseType: PropTypes.string.isRequired,
  yearsOfExperience: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  isTransAfirming: PropTypes.bool.isRequired,
};

export default ProviderCard;