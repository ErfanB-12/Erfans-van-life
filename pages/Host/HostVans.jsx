import React from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";

import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function HostVans() {
  const DataPromise = useLoaderData();

  function hostVansElement(vans) {
    const vanElement = vans.map((van) => {
      return (
        <Link key={van.id} to={van.id}>
          <div className="host-van">
            <img src={van.imageUrl} alt={`image of ${van.name}`} />
            <div>
              <h2>{van.name}</h2>
              <p>${van.price} <span>/day</span></p>
            </div>
          </div>
        </Link>
      );
    });
    return vanElement;
  }

  return (
    <div className="host-van-container">
      <h1>Your listed vans</h1>
      <React.Suspense fallback={<h2>Loading Vans ...</h2>}>
        <Await resolve={DataPromise.vans}>{hostVansElement}</Await>
      </React.Suspense>
    </div>
  );
}
