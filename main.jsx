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
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import SignIn, {
  loader as signInLoader,
  action as signInAction,
} from "./pages/SignIn";
import SignUp, {
  loader as signUpLoader,
  action as signUpAction,
} from "./pages/SignUp";
import VansDetail, { loader as vansDetailLoader } from "./pages/Vans/VanDetail";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Dashboard, {
  loader as hostDashboardVansLoader,
} from "./pages/Host/Dashboard";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanDetailInfo from "./pages/Host/HostVanInfo";
import HostVanDetailPricing from "./pages/Host/HostVanPricing";
import HostVanDetailPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VansDetail />}
        errorElement={<Error />}
        loader={vansDetailLoader}
      />

      <Route
        path="signIn"
        element={<SignIn />}
        loader={signInLoader}
        action={signInAction}
      />

      <Route
        path="signup"
        element={<SignUp />}
        loader={signUpLoader}
        action={signUpAction}
      />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={hostDashboardVansLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />

        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={hostVansLoader}
        />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanDetailInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanDetailPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanDetailPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
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
