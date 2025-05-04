import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetailPhotos() {
  const van = useOutletContext()
  return (
    <div className="host-van-photo">
      <img src={van.imageUrl} alt={`Image of ${van.name}`} />
    </div>
  )
}
