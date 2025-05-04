import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";

import { getVans } from "../../api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VansDetail() {
  const van = useLoaderData();

  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
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
    </div>
  );
}
