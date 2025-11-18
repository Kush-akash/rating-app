import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import StoreList from "./pages/StoreList";
import StoreDetails from "./pages/StoreDetails";
import { getUser, logout } from "./api";

function Nav() {
  const user = getUser();
  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #ddd", display: "flex", gap: 12 }}>
      <Link to="/">Stores</Link>
      {user ? (
        <>
          <span style={{ marginLeft: "auto" }}>Hi, {user.name}</span>
          <button onClick={() => { logout(); window.location.href = "/login"; }} style={{ marginLeft: 8 }}>
            Logout
          </button>
        </>
      ) : (
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div style={{ maxWidth: 980, margin: "24px auto", padding: "0 12px" }}>
        <Routes>
          <Route path="/" element={<StoreList />} />
          <Route path="/store/:id" element={<StoreDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
