import React, { useEffect } from 'react';
import history from '../../history';
import { connect } from 'react-redux';
import moment from 'moment';

import { houseAuditItems } from './houseAudits.json';
import Spinner from '../Spinner';
import { fetchHouseAudit } from '../../actions/houseAuditActions';

const HouseAuditShow = props => {
  useEffect(() => {
    props.fetchHouseAudit(props.match.params.id);
  }, []);

  const renderFindings = findings => {
    if (findings.length < 1) {
      return '';
    }
    return (
      <ul className="ml-3 mt-2 mb-4">
        {findings.map((finding, i) => (
          <li key={i}>{finding}</li>
        ))}
      </ul>
    );
  };

  const audit = props.houseAudit;
  if (!audit) {
    return <Spinner />;
  }
  return (
    <div className="pb-5">
      <div className="py-2 .d-print-none"></div>
      {/* Extra line not visible when printing */}
      <div className="container report-frame">
        <div className="row">
          <div className="col-2 pl-0">
            <img src="../../hhch-logo.svg" height={150} alt="His House Children's Home Logo" />
          </div>
          <div className="col-10">
            <div className="d-flex justify-content-center align-items-center">
              <h1 className="display-4 py-5">HOUSE AUDIT REPORT</h1>
            </div>
          </div>
        </div>
        <div className="report-content">
          <div className="row mb-3">
            <div className="col-7">
              <div className="mr-5">
                <strong>Date:</strong> {moment(audit.date).format('ddd, MMM DD, YYYY')}
              </div>
              <div className="mr-5">
                <strong>Auditors:</strong> {audit.auditor}
              </div>
            </div>
            <div className="col-5">
              <div className="mr-5">
                <strong>House:</strong> {audit.house}
              </div>
              <div className="mr-5">
                <strong>Audit Id: </strong> {audit._id}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <h4 className="my-3">Household Audit</h4>
            <h4 className="my-3">Score: {audit.score}%</h4>
          </div>

          <div className="list-group list-group-flush mb-4">
            {houseAuditItems.map((item, i) => (
              <div className="list-group-item py-0 px-0" key={i}>
                <div className="d-flex justify-content-between border-bottom m-0 py-2 pl-3">
                  <div>{item.label.toUpperCase()}:</div>
                  <div>
                    <strong>{audit.items[item.name].score} %</strong>
                  </div>
                </div>
                {renderFindings(audit.items[item.name].findings)}
              </div>
            ))}
          </div>
          <div className="pb-5">
            <div className="d-flex justify-content-between">
              <h4 className="mt-3 mb-0">Maintenance Audit ({audit.maintenance.max} Items)</h4>
              <h4 className="mt-3 mb-0">Score: {audit.maintenance.score}%</h4>
            </div>
            <hr />
            {renderFindings(audit.maintenance.findings)}
          </div>
        </div>
      </div>

      <footer className="bg-light p-3 fixed-bottom">
        <div className="container"> &copy; Copyright 2019. His House</div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    houseAudit: state.houseAudits[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchHouseAudit }
)(HouseAuditShow);
