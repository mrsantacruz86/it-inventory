import React from 'react';
import PropTypes from 'prop-types';

const TestPage = props => {
  return <div className="container">Test</div>;
};

TestPage.propTypes = {
  children: PropTypes.element
};

export default TestPage;
