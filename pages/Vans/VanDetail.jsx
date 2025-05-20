import React from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";

import { getVan } from "../../api";

export function loader({ params }) {
  return defer({ van: getVan(params.id) });
}

export default function VansDetail() {
  const dataPromise = useLoaderData();

  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  function vansDetailElement(van) {
    return (
      <>
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
      </>
    );
  }

  return (
    <div className="van-detail-container">
      <React.Suspense fallback={<h2>Loading Van detail ...</h2>}>
        <Await resolve={dataPromise.van}>{vansDetailElement}</Await>
      </React.Suspense>
    </div>
  );
}
