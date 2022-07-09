import React from 'react';
import PropTypes from 'prop-types';

const ChevronIconAnimated = props => {
  return (
    <div>
      <svg
        className={`chevronIcon${props.open ? ' inverted' : ''}`}
        width={props.size || '1rem'}
        x="0px"
        y="0px"
        viewBox="0 0 100 80"
      >
        <path d="M20 25 L50 55 L80 25" fill="none" stroke="currentColor" strokeWidth="8" />
      </svg>
    </div>
  );
};

ChevronIconAnimated.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.number
};

export default ChevronIconAnimated;
