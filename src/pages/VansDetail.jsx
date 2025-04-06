import React from "react";
import { useParams } from "react-router-dom";

import "../server";

export function VansDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt={`image of ${van.name}`} />
          <i className={`van-detail ${van.type}`}>{van.type}</i>

          <h2>{van.name}</h2>
          <p className="van-price">
            ${van.price}
            <span>/day</span>
          </p>

          <p>{van.description}</p>

          <button>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
