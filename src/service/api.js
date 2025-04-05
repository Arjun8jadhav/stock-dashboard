// services/api.js
import axios from "axios"

export const getStockData = async () => {
    try {
      const response = await axios.get(
        "https://ihhhjmn6if.execute-api.ap-south-1.amazonaws.com/Prod-env?type=stock&symbol=AAPL"
      );
  
      const rawData = response.data;
      // In case it's a stringified object
      const data = typeof rawData === "string" ? JSON.parse(rawData) : rawData;
  
      console.log("Parsed stock data:", data);
  
      return {
        symbol: data["01. symbol"],
        open: data["02. open"],
        high: data["03. high"],
        low: data["04. low"],
        price: data["05. price"],
        volume: data["06. volume"],
        latestTradingDay: data["07. latest trading day"],
        previousClose: data["08. previous close"],
        change: data["09. change"],
        changePercent: data["10. change percent"],
      };
    } catch (error) {
      console.error("Error fetching stock data:", error);
      return null;
    }
  };
  
  
  export const getSignalData = () => {
    return {
      "security_type": "stock",
      "symbol": "AAPL",
      "current_price": 188.38,
      "signals": [0, 0, 0, 1, 0, 0, -1, 0],
      "price_series": [203.19, 169.542, 216.637, 160.123, 197.799, 178.961, 226.056, 188.38]
    };
  };
  