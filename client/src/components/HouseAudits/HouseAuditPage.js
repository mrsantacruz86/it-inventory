import React from 'react';
import { connect } from 'react-redux';
import './HouseAuditPage.css';
import AuditDetails from '../../components/AuditDetails';
import DataTable from '../DataTable';
import moment from 'moment';
import BarChart from '../BarChart';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormText,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
// @ts-ignore
import data from '../../components/DataTable/house-audits.json';
import { percentage } from '../../utils/numbers';

class HouseAuditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'table',
      record: null
    };
  }

  handleNewAudit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      view: 'new'
    });
  };

  render() {
    const dataset = chartData(data);
    return (
      <div>
        <h3 className="pt-3">House Audits</h3>
        {this.state.view === 'table' ? (
          <AuditRecords
            dataset={dataset}
            handleNewAudit={this.handleNewAudit}
          />
        ) : (
          <AuditDetails />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  {}
)(HouseAuditPage);

//function to filter the data for one house
// function filterByHouse(arr) {
//   return arr.filter(item => moment(item.date).isSameOrAfter("01/01/2019") && item.dept === "UAC")
// }

function chartData(arr) {
  let filtered = arr.filter(
    item => moment(item.date).isSameOrAfter('01/01/2019') && item.dept === 'UAC'
  );
  let newArray = filtered.map(item => ({
    House: item.house,
    labelHousehold: percentage(item.avg, 0) + '%',
    Household: Number(percentage(item.avg, 0)),
    labelMaintenance: percentage(item.avgM, 0) + '%',
    Maintenance: Number(percentage(item.avgM, 0))
  }));
  return newArray;
}

const AuditRecords = props => (
  <Card>
    <CardBody>
      <CardTitle>
        <h5>House Audits</h5>
      </CardTitle>
      <Button
        color="primary"
        className="mb-3 mr-1"
        onClick={props.handleNewAudit}
      >
        New Audit
      </Button>
      <Button color="primary" className="mb-3 mr-1">
        Generate Report
      </Button>
      <BarChart data={props.dataset} />
      <DataTable />
    </CardBody>
  </Card>
);
