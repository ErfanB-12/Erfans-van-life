import React from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./server";
import "./index.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VansDetail from "./pages/vans/VansDetail";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import Dashboard from "./pages/host/Dashboard";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import HostVanDetailInfo from "./pages/host/HostVanDetailInfo";
import HostVanDetailPricing from "./pages/host/HostVanDetailPricing";
import HostVanDetailPhotos from "./pages/host/HostVanDetailPhotos";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
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
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(<App />);
