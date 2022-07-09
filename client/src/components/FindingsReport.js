import React, { useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { fetchHouseAudits } from '../actions/houseAuditActions';
import Spinner from './Spinner';

const FindingsReport = props => {
  const houseAudits = useSelector(state => state.houseAudits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouseAudits());
  }, []);

  const renderList = () => {
    return !houseAudits ? (
      <Spinner />
    ) : (
      houseAudits.map(audit => (
        <li key={audit._id}>
          <div>{audit.maintenance.score}%</div>
        </li>
      ))
    );
  };

  console.log(houseAudits);
  return (
    <Container fluid>
      <div className="py-2" />
      <h3 className="py-2">Findings Report</h3>
      <ul>{renderList()}</ul>
    </Container>
  );
};

export default FindingsReport;
