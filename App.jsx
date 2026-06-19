import { useState } from "react";
import { shortestPath } from "./dijkstras";
import "./App.css";

function App() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [result, setResult] = useState(null);

  const findRoute = () => {
    if (!source || !destination) {
      alert("Please enter source and destination");
      return;
    }

    const data = shortestPath(source, destination);

    setResult(data);
  };

  return (
    <div className="container">
      <h1>🚗 Smart Route Optimization System</h1>

      <input
        type="text"
        placeholder="Enter Source City"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Destination City"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <button onClick={findRoute}>
        Find Best Route
      </button>

      {result && (
        <div className="result">
          <h2>Optimal Route</h2>

          <p>{result.path.join(" → ")}</p>

          <h3>
            Total Distance: {result.distance}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;