import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../utils/authService";

function Signup() {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const res = await authService.signup(userData);
      alert(res.message);
      navigate("/dashboard");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Signup failed. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div style={{ width: "380px", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", backgroundColor: "white" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#387ed1", fontSize: "2rem" }}>Signup</h1>

        {error && (
          <div style={{ color: "#d32f2f", background: "#ffebee", padding: "10px 14px", borderRadius: "6px", marginBottom: "16px", fontSize: "0.9rem" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Signup</button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#387ed1", textDecoration: "none", fontWeight: "600" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "12px 14px", marginBottom: "16px", borderRadius: "7px",
  border: "1px solid #ddd", fontSize: "15px", boxSizing: "border-box",
  outline: "none",
};

const buttonStyle = {
  width: "100%", padding: "13px", backgroundColor: "#387ed1", color: "white",
  border: "none", borderRadius: "7px", fontSize: "16px", cursor: "pointer",
  fontWeight: "600", marginTop: "4px",
};

export default Signup;
