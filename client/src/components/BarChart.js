import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { percentage } from '../utils/numbers';

class HouseScoresChart extends Component {
  chartRef = React.createRef();

  labels = this.props.data.map(item => {
    return item.house;
  });
  values = this.props.data.map(item => {
    return item.avg;
  });

  render() {
    const { data } = this.props;
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: 20
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="house" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="score" fill="#007bff">
              <LabelList dataKey="label" position="top" />
            </Bar>
            {/* <Bar dataKey="Maintenance" fill="#dc3545">
          <LabelList dataKey="label" position="top" />
        </Bar> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

HouseScoresChart.propTypes = {
  data: PropTypes.array
};

export default HouseScoresChart;
