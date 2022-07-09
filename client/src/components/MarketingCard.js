import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MarketingCard = props => {
  const { img, title, text, linkLabel, linkPath } = props;
  return (
    <div className="card text-center mt-3 marketing-card">
      <div className="card-img-top">{img}</div>
      <div className="card-body">
        <h3 className="card-title my-3">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <Link className="btn btn-primary" to={linkPath}>
          {linkLabel}
        </Link>
      </div>
    </div>
  );
};

MarketingCard.propTypes = {
  img: PropTypes.element,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired
};

export default MarketingCard;
