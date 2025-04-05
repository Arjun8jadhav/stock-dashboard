import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PriceChart = ({ priceSeries }) => {
  const data = priceSeries.map((price, index) => ({
    day: `Day ${index + 1}`,
    price,
  }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Price Trend</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
