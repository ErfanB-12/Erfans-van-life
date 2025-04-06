import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./server";
import "./index.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Vans } from "./pages/Vans";
import { VansDetail } from "./pages/VansDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import Dashboard from "./pages/host/Dashboard";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import HostVanDetailInfo from "./pages/host/HostVanDetailInfo";
import HostVanDetailPricing from "./pages/host/HostVanDetailPricing";
import HostVanDetailPhotos from "./pages/host/HostVanDetailPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />

            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanDetailInfo />} />
              <Route path="pricing" element={<HostVanDetailPricing />} />
              <Route path="photos" element={<HostVanDetailPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
