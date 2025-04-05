import React, { useEffect, useState } from 'react';
import StockOverview from './component/stockoverview';
import PriceChart from './component/pricechart';
import SignalTimeline from './component/signal';
import { getStockData, getSignalData } from './service/api';

function App() {
  const [stock, setStock] = useState(null);
  const [signals, setSignals] = useState(null); // should be null, not empty array
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      const stockInfo = await getStockData();
      const signalInfo = await getSignalData();
      setStock(stockInfo);
      setSignals(signalInfo);
      setFlag(false); // ✅ move this after data is set
    }
    fetchdata();
  }, []);

  if (flag || !stock || !signals) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Stock Insight Dashboard</h1>
      <StockOverview stock={stock} />
      <PriceChart priceSeries={signals.price_series} />
      <SignalTimeline signals={signals.signals} />
    </div>
  );
}

export default App;
