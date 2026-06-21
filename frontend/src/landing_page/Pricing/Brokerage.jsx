import React from "react";

function Brokerage() {
  return (
    <div className="container my-5 py-4">
      {/* Top Links Grid Section */}
      <div className="row mb-4">
        <div className="col-md-6 text-md-center ps-md-5">
          <a 
            href="/" 
            className="text-decoration-none fs-5 fw-medium" 
            style={{ color: "#387ed1" }}
          >
            Brokerage calculator
          </a>
        </div>
        <div className="col-md-6 text-md-center pe-md-5">
          <a 
            href="/" 
            className="text-decoration-none fs-5 fw-medium" 
            style={{ color: "#387ed1" }}
          >
            List of charges
          </a>
        </div>
      </div>

      {/* Bullet Points Information List */}
      <div className="row justify-content-start mt-4">
        <div className="col-lg-10 offset-lg-1">
          <ul 
            className="lh-lg" 
            style={{ 
              fontSize: "13.5px", 
              color: "#666", 
              listStyleType: "disc" 
            }}
          >
            <li className="mb-2">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li className="mb-2">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-2">
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-2">
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;