// src/App.jsx
import "./App.css";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "./data";

function App() {
  return (
    <div className="app">
      <h1>🍽️ Decorah Restaurant Directory</h1>
      <div className="grid">
        {restaurants.map((r, index) => (
          <RestaurantCard key={index} {...r} />
        ))}
      </div>
    </div>
  );
}

export default App;
