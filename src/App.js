import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        setQuote(data.quotes[0]);
      });
  }, []);

  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState([]);

  const getQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="App">
      <div
        style={{
          border: "1px solid #424874",
          padding: 20,
          margin: 10,
          background: "#DCD6F7"
        }}
      >
        <div style={{ fontSize: "25px", color: "#424874", margin: 10 }}>
          {quote.quote}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          - {quote.author}
        </div>
      </div>
      <button
        style={{
          border: "none",
          background: "#CACFD6",
          padding: 10,
          borderRadius: "20px"
        }}
        onClick={() => getQuote()}
      >
        Get Quote
      </button>
    </div>
  );
}
