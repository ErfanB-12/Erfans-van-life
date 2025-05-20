import React from "react";
import {
  NavLink,
  Link,
  Outlet,
  useLoaderData,
  defer,
  Await,
  useLocation,
} from "react-router-dom";

import { getVan } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return defer({ van: getVan(params.id) });
}

export default function HostVanDetail() {
  const dataPromise = useLoaderData();

  const location = useLocation();
  const backLink = location.state?.backLink || "..";
  const backName = backLink === "/host" ? "dashboard" : "all vans";

  const activeStyle = {
    color: "#161616",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  function hostVanDetail(van) {
    return (
      <>
        <Link to={backLink} relative="path" className="back-button">
          &larr; <span>Back to {backName}</span>
        </Link>

        <div className="hostVan-detail-container">
          <div key={van.id} className="hostVan-detail">
            <img src={van.imageUrl} alt={`image of ${van.name}`} />
            <div className="hostVan-detail-text">
              <i className={`van-type ${van.type}`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p>
                ${van.price}
                <span>/day</span>
              </p>
            </div>
          </div>

          <nav className="host-van-detail-nav">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Details
            </NavLink>

            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              state={{ backLink: "../.." }}
            >
              Pricing
            </NavLink>

            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              state={{ backLink: "../.." }}
            >
              Photos
            </NavLink>
          </nav>

          <Outlet context={van} />
        </div>
      </>
    );
  }

  return (
    <section className="host-van-detail-section">
      <React.Suspense fallback={<h2>Loading Van Details ...</h2>}>
        <Await resolve={dataPromise.van}>{hostVanDetail}</Await>
      </React.Suspense>
    </section>
  );
}
