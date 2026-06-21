import React from "react";

const ComingSoon = ({ pageName }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "70vh",
      textAlign: "center",
      padding: "40px 20px",
    }}>
      <div style={{
        animation: "bounce 1.5s infinite",
        fontSize: "64px",
        marginBottom: "24px",
      }}>
        🚧
      </div>

      <h2 style={{
        fontSize: "2rem",
        fontWeight: "700",
        color: "#383838",
        marginBottom: "12px",
      }}>
        {pageName || "Page"} — Coming Soon
      </h2>

      <p style={{
        fontSize: "1.1rem",
        color: "#888",
        maxWidth: "420px",
        lineHeight: "1.7",
        marginBottom: "32px",
      }}>
        We're working hard to bring this section to life.
        It will be available soon — stay tuned!
      </p>

      <div style={{
        width: "280px",
        height: "6px",
        background: "#e8e8e8",
        borderRadius: "10px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: "60%",
          background: "linear-gradient(90deg, #387ed1, #5ba3f5)",
          borderRadius: "10px",
          animation: "progress 2s ease-in-out infinite alternate",
        }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes progress {
          0%   { width: 30%; }
          100% { width: 80%; }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
