import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import authService from "../utils/authService";

const ProtectedRoute = ({ children }) => {
  const [authState, setAuthState] = useState("checking");

  useEffect(() => {
    authService.getCurrentUser().then((data) => {
      setAuthState(data.loggedIn ? "authenticated" : "unauthenticated");
    });
  }, []);

  if (authState === "checking") {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "16px",
        background: "#f0f3f5",
      }}>
        <div style={{
          width: "36px", height: "36px",
          border: "3px solid #e0e0e0",
          borderTop: "3px solid #387ed1",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ color: "#999", fontSize: "0.85rem", margin: 0 }}>Loading…</p>
      </div>
    );
  }

  if (authState === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
