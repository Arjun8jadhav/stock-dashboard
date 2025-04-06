import React from 'react';

const SignalTimeline = ({ signals }) => {
  return (
    <div>
      <h2>Trading Signals</h2>
      <div style={{ display: 'flex', gap: 10 }}>
        {signals.map((signal, index) => {
          let symbol = '⚪';
          if (signal === 1) symbol = '🟢';
          else if (signal === -1) symbol = '🔴';

          return <div key={index}>{symbol}</div>;
        })}
      </div>
    </div>
  );
};

export default SignalTimeline;
