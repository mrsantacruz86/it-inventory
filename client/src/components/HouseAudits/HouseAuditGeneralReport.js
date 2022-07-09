import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';

import { fetchHouseAudits } from '../../actions/houseAuditActions';
import Spinner from '../Spinner';
import moment from 'moment';
import template from './houseAudits.json';
import BarChart from '../BarChart';

import { sortByParam, percentage } from '../../utils/numbers';

const data = [
  {
    house: 'House 22',
    score: percentage(0.9)
  },
  {
    house: 'House 23',
    score: percentage(0.5)
  },
  {
    house: 'House 25',
    score: percentage(0.75)
  }
];

const HouseAuditsGeneralReport = props => {
  const houseAudits = useSelector(state =>
    sortByParam(Object.values(state.houseAudits), 'house', false)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouseAudits());
  }, []);

  const renderRows = () => {
    return !houseAudits ? (
      <Spinner />
    ) : (
      houseAudits.map(audit => (
        <tr key={audit._id}>
          <td>{moment(audit.date).format('MM/DD/YYYY')}</td>
          <td>{audit.house}</td>
          <td>{audit.department}</td>
          {template.houseAuditItems.map((item, index) => (
            <td key={index}>{!audit.items[item.name] ? '' : audit.items[item.name].score}%</td>
          ))}
          <td>{audit.score}%</td>
          <td>{audit.maintenance.score}%</td>
          <td>{JSON.stringify(audit.maintenance.findings)}%</td>
        </tr>
      ))
    );
  };

  return (
    <Container fluid>
      <div className="py-2" />
      <h3 className="py-2">House Audits General Report</h3>
      <div className="my-3">
        <Link className="btn btn-primary" to="/houseaudits">
          <i className="fas fa-chevron-left" /> Go back to List
        </Link>
      </div>

      <section className="chart my-3">
        <BarChart data={sumarizeData(houseAudits)} />
      </section>

      <section className="mt-3">
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>House</th>
              <th>Program</th>
              {template.houseAuditItems.map((item, index) => (
                <th key={`th-${index}`}>{item.label}</th>
              ))}
              <th>Score</th>
              <th>Maintenance</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </Table>
      </section>

      {/* <pre>{JSON.stringify(sumarizeData(houseAudits), '', 2)}</pre> */}
    </Container>
  );
};

const sumarizeData = input => {
  const { houses } = template;
  let output = [];
  houses.map(house => {
    const filtered = input.filter(audit => audit.house === house);
    const houseAVG = {
      house: `House ${house}`,
      score: filtered.reduce((acc, audit) => (acc + audit.score) / filtered.length, 0)
    };
    output.push(houseAVG);
  });

  return output;
};

export default HouseAuditsGeneralReport;
