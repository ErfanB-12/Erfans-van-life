import React from "react";
import { Link } from "react-router-dom";

export function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElement = vans.map((van) => (
    <div key={van.id} className="vans-tile">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View dtail for ${van.name} in pice at ${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`image of ${van.name}`} />
        <div className="van-info">
          <h2>{van.name}</h2>
          <p>
            ${van.price} <br /> <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} slected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="vans-container">
      <h1>Explore our van options</h1>
      <div className="vans-list">
        {vans.length > 0 ? vanElement : (<h1>Loading ...</h1>)}
      </div>
    </div>
  );
}
