import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetailPricing() {
  const van = useOutletContext()

  return (
    <div className="host-van-pricing">
      <p>${van.price}.00<span>/day</span></p>
    </div>
  )
}
