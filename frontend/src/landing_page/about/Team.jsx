import React from "react";

function FounderSection() {
  return (
    <div className="container my-5 py-5">
      {/* Section Title */}
      <div className="row mb-5 text-center">
        <h1 className="fs-2 text-dark" style={{ fontWeight: "500" }}>
          People
        </h1>
      </div>

      {/* Two Column Layout */}
      <div 
        className="row justify-content-center align-items-center text-muted mx-auto"
        style={{ maxWidth: "1100px", lineHeight: "1.8", fontSize: "1.05rem" }}
      >
        
        {/* Left Column: Image & Designation */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img 
            src="\media\nithinKamath.jpg" 
            alt="Nithin Kamath" 
            className="rounded-circle img-fluid"
            style={{ width: "295px", height: "295px", objectFit: "cover" }}
          />
          <h3 className="fs-4 text-dark mt-4 mb-1" style={{ fontWeight: "500" }}>
            Nithin Kamath
          </h3>
          <p className="text-muted small">
            Founder, CEO
          </p>
        </div>

        {/* Right Column: Detailed Bio */}
        <div className="col-md-7 px-4 px-md-5">
          <p className="mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-4">
            Playing basketball is his zen.
          </p>
          <p className="mt-4">
            Connect on{" "}
            <a href="#" className="text-decoration-none">Homepage</a> /{" "}
            <a href="#" className="text-decoration-none">TradingQ&A</a> /{" "}
            <a href="#" className="text-decoration-none">Twitter</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default FounderSection;