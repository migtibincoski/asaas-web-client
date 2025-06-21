import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Outlet, Route, Routes } from "react-router";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="accounts" element={<h1>Accounts Page</h1>} />

        <Route
          path="dashboard"
          element={
            <>
              <h1>Dashboard Page</h1>
              <br />
              <br />
              <Outlet />
            </>
          }
        >
          <Route index element={<h2>Home Page</h2>} />
          <Route path="pix" element={<h2>Pix Page</h2>} />

          <Route
            path="payments"
            element={
              <>
                <h2>Payments Page</h2>
                <br />
                <Outlet />
              </>
            }
          >
            <Route index element={<h3>Home Page</h3>} />
            <Route path="details" element={<h3>Payment Details Page</h3>} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
