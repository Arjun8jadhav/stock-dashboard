import React from 'react';
import '../styles/stockoverview.scss'
const StockOverview = ({ stock }) => {

  return (
    <div className="stock-info">
      <div className="card">
        <span className="label">Current Price</span>
        <div className="value">${stock.price}</div>
      </div>
      <div className="card">
        <span className="label">Open</span>
        <div className="value">${stock.open}</div>
      </div>
      <div className="card">
        <span className="label">Close</span>
        <div className="value">${stock.previousClose}</div>
      </div>
      <div className="card">
        <span className="label">High</span>
        <div className="value">${stock.high}</div>
      </div>
      <div className="card">
        <span className="label">Low</span>
        <div className="value">${stock.low}</div>
      </div>
      <div className="card">
        <span className="label">Volume</span>
        <div className="value">{stock.volume}</div>
      </div>
      <div className={`card ${stock.change < 0 ? 'negative' : 'positive'}`}>
        <span className="label">Change</span>
        <div className="value">{stock.change} ({stock.change_percent}%)</div>
      </div>
    </div>

  );
};

export default StockOverview;
