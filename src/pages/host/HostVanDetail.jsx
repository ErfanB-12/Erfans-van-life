import React from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const [van, setVan] = React.useState(null);
  const params = useParams();
  const activeStyle = {
    color: "#161616",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  return (
    <section className="host-van-detail-section">
      {van ? (
        <>
          <Link to=".." relative="path" className="back-button">
            &larr; <span>Back to all vans</span>
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
              >
                Pricing
              </NavLink>

              <NavLink
                to="photos"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Photos
              </NavLink>
            </nav>

            <Outlet context={van} />
          </div>
        </>
      ) : (
        <h2>Loading ...</h2>
      )}
    </section>
  );
}
