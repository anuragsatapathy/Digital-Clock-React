import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const date = time.toLocaleDateString(undefined, options);
  const currentTime = time.toLocaleTimeString();

  return (
    <div className="clock-container">
      <div className="clock-card">
        <h1 className="clock-time">{currentTime}</h1>
        <p className="clock-date">{date}</p>
      </div>
    </div>
  );
}

export default App;

