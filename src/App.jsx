import React, { useEffect, useState } from 'react';
import StockOverview from './component/stockoverview';
import PriceChart from './component/pricechart';
import SignalTimeline from './component/signal';
import { getStockData, getSignalData } from './service/api';
import './app.scss'
import { Navbar } from './component/navbar';

function App() {
  const [stock, setStock] = useState(null);
  const [signals, setSignals] = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      const stockInfo = await getStockData();
      const signalInfo = await getSignalData();
      setStock(stockInfo);
      setSignals(signalInfo);
      setFlag(false);
    }
    fetchdata();
  }, []);

  if (flag || !stock || !signals) return <div>Loading...</div>;

  return (
    <>
      <Navbar></Navbar>
      <div className='dashboard'>
        <StockOverview stock={stock} />
        <PriceChart priceSeries={signals.price_series} />
        <SignalTimeline signals={signals.signals} />
      </div>
    </>
  );
}

export default App;
