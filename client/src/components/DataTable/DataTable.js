import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import moment from 'moment';
import { percentage } from '../../utils/numbers';
import './DataTable.css';
// @ts-ignore
import data from './house-audits.json';
// const headers = [
//   { name: "id", order: 1, label: "Audit Id" },
//   { name: "date", order: 1, label: "Date" },
//   { name: "house", order: 2, label: "House" },
//   { name: "dept", order: 3, label: "Dept" },
//   { name: "auditor", order: 4, label: "Auditor" },
//   { name: "avgD", order: 5, label: "Documentation" },
//   { name: "avgS", order: 6, label: "Safety" },
//   { name: "avgH", order: 7, label: "Housekeeping" },
//   { name: "avg", order: 8, label: "Household Score" },
//   { name: "avgM", order: 9, label: "Maintenance Score" },
// ]

const headers = [
  "Audit Id",
  "Date",
  "House",
  "Dept",
  "Auditor",
  // "Documentation",
  // "Safety",
  // "Housekeeping",
  "Household Score",
  "Maintenance Score"
]

class DataTable extends Component {

  render() {
    // console.log(data[0]);
    return (
      <Table hover responsive>
        <thead>
          <tr>
            {headers.map((header, i) => <th key={i}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(record => (
            <tr key={record._id}>
              <td>{record._id}</td>
              <td>{moment(record.date).format("MM/DD/YYYY")}</td>
              <td>House-{record.house}</td>
              <td>{record.dept}</td>
              <td>{record.auditor}</td>
              <td>{percentage(record.avg, 1)}%</td>
              <td>{percentage(record.avgM, 1)}%</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {})(DataTable)