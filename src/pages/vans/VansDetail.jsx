import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VansDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  const location = useLocation();
  console.log(location);
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
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
