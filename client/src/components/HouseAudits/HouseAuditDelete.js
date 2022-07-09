import React, { Fragment, useEffect } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHouseAudit, deleteHouseAudit } from '../../actions/houseAuditActions';

const HouseAuditDelete = props => {
  useEffect(() => {
    props.fetchHouseAudit(props.match.params.id);
  }, []);

  const renderActions = () => {
    return (
      <Fragment>
        <Button onClick={() => props.deleteHouseAudit(props.match.params.id)} variant="danger">
          Delete
        </Button>
        <Link to="/houseaudits" className="btn btn-secondary">
          Cancel
        </Link>
      </Fragment>
    );
  };

  const renderContent = () => {
    if (!props.houseAudit) {
      return 'Are you sure you want to delete this House Audit?';
    }
    return `Are you sure you want to delete this audit from house: ${props.houseAudit.house}?`;
  };

  return (
    <Modal
      title="Delete House Audit"
      content={renderContent()}
      actions={renderActions()}
      onHide={() => history.push('/houseaudits')}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { houseAudit: state.houseAudits[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchHouseAudit, deleteHouseAudit }
)(HouseAuditDelete);
