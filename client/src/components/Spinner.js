import React from 'react';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center aling-items-center">
      <div className="py-5"></div>
      <div className="spinner-border mt-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
