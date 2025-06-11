// src/RestaurantCard.jsx
import "./RestaurantCard.css";

function RestaurantCard({ name, description, cuisine, hours, website }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>
        <strong>Cuisine:</strong> {cuisine}
      </p>
      <p>
        <strong>Hours:</strong> {hours}
      </p>
      <p>{description}</p>
      <a href={website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
}

export default RestaurantCard;
