import React from 'react';

const StockOverview = ({ stock }) => {
  
  return (
    <div className="stock-overview">
      <h2>{stock.symbol} Stock Overview</h2>
      <p>Price: ${stock.price}</p>
      <p>Open: ${stock.open} | Close: ${stock.previousClose}</p>
      <p>High: ${stock.high} | Low: ${stock.low}</p>
      <p>Volume: {stock.volume}</p>
      <p style={{ color: stock.change > 0 ? 'green' : 'red' }}>
        Change: {stock.change} ({stock.changePercent})
      </p>
    </div>
  );
};

export default StockOverview;
