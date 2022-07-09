import React from 'react';
import { connect } from 'react-redux';

// Data json files
import { createHouseAudit } from '../../actions/houseAuditActions';
import HouseAuditForm from './HouseAuditForm';

const HouseAuditCreate = props => {
  const onSubmit = values => {
    console.log(values);
    props.createHouseAudit(values);
  };

  return (
    <div className="container">
      <div className="py-3"></div>
      <h3 className="my-3">Create House Audit</h3>
      <HouseAuditForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(
  null,
  { createHouseAudit }
)(HouseAuditCreate);
