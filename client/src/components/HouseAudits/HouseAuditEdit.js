import React, { Fragment, Component } from 'react';
import history from '../../history';
import { connect } from 'react-redux';

// Data json files
import { editHouseAudit, fetchHouseAudit } from '../../actions/houseAuditActions';
import Modal from '../Modal';
import HouseAuditForm from './HouseAuditForm';

// Render Modal
const renderModalActions = () => {
  return (
    <Fragment>
      <button type="button" className="btn btn-secondary" data-dismiss="modal">
        Close
      </button>
    </Fragment>
  );
};
const renderModal = () => {
  return (
    <Modal
      title="Audit succesfully saved."
      onDismiss={() => history.push('/houseaudits')}
      actions={renderModalActions}
    >
      The Cottage audtid has been successfully saved!
    </Modal>
  );
};
class HouseAuditCreate extends Component {
  componentDidMount() {
    this.props.fetchHouseAudit(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editHouseAudit(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div className="container">
        <div className="py-3"></div>

        <h3 className="my-3">Edit House Audit</h3>
        <p>Id: {this.props.match.params.id} </p>
        <div className="py-3"></div>

        <HouseAuditForm onSubmit={this.onSubmit} values={this.props.houseAudit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { houseAudit: state.houseAudits[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { editHouseAudit, fetchHouseAudit }
)(HouseAuditCreate);
