import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = React.useState(null);

  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElement = displayedVans.map((van) => (
    <div key={van.id} className="vans-tile">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View dtail for ${van.name} in pice at ${van.price} per day`}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (error) {
    return (
      <h1 className="vans-error" aria-live="assertive">
        Error: {error.message}
      </h1>
    );
  }

  return (
    <div className="vans-container">
      <h1>Explore our van options</h1>
      <div className="vans-filter">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filter"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="vans-list">{vanElement}</div>
    </div>
  );
}
