import React from "react";
import { BsStarFill } from "react-icons/bs";
import {
  Link,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";

import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function Dashboard() {
  const DataPromise = useLoaderData();

  function hostVansElement(vans) {
    const vanElement = vans.map((van) => {
      return (
        <div className="dashboard-van" key={van.id} to={van.id}>
          <img src={van.imageUrl} alt={`image of ${van.name}`} />
          <div>
            <h2>{van.name}</h2>
            <p>
              ${van.price} <span>/day</span>
            </p>
          </div>

          <Link
            to={`vans/${van.id}`}
            state={{
              backLink: "/host",
            }}
          >
            Edit
          </Link>
        </div>
      );
    });
    return vanElement;
  }
  return (
    <section className="dashboard-container">
      <section className="dashboard-income-container">
        <div className="dashboard-income">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>

          <h2>$2,260</h2>
        </div>

        <Link to="income">Details</Link>
      </section>
      <section className="dashboard-reviews-container">
        <div className="dashboard-reviews">
          <h2>Review score</h2>

          <BsStarFill className="star" />
          <p>
            5.0 <span>/5</span>
          </p>
        </div>

        <Link to="reviews">Details</Link>
      </section>
      <section className="dashboard-vans-container">
        <div className="dashboard-vans-header">
          <h1>Your listed vans</h1>
          <Link to="vans">View all</Link>
        </div>
        <React.Suspense fallback={<h2>Loading Vans ...</h2>}>
          <Await resolve={DataPromise.vans}>{hostVansElement}</Await>
        </React.Suspense>
      </section>
    </section>
  );
}
