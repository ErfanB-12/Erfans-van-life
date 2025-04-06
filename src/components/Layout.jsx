import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>
        <p>Ⓒ 2025 #VANLIFE</p>
      </footer>
    </>
  );
}
