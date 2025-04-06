import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVan] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  const vanElement = vans.map((van) => {
    return (
      <Link key={van.id} to={van.id}>
        <div className="host-van">
          <img src={van.imageUrl} alt={`image of ${van.name}`} />
          <div>
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="host-van-container">
      <h1>Your listed vans</h1>
      {vans.length > 0 ? vanElement : <h1>Loading ...</h1>}
    </div>
  );
}
