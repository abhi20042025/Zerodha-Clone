import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Page Header */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="fw-normal">Pricing</h1>
        <h3 className="text-muted mt-3 fs-5 fw-normal">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing Features Tri-Column Layout */}
      <div className="row p-5 text-center">
        {/* Column 1: Free Equity Delivery */}
        <div className="col-md-4 p-4">
          <img 
            src="/media/pricingEquity.svg" 
            alt="Free equity delivery" 
            className="mb-4 img-fluid"
            style={{ maxHeight: "160px" }}
          />
          <h2 className="fs-4 fw-normal text-dark mb-3">Free equity delivery</h2>
          <p className="text-secondary small lh-lg">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Column 2: Intraday and F&O Trades */}
        <div className="col-md-4 p-4">
          <img 
            src="/media/intradayTrades.svg" 
            alt="Intraday and F&O trades" 
            className="mb-4 img-fluid"
            style={{ maxHeight: "160px" }}
          />
          <h2 className="fs-4 fw-normal text-dark mb-3">Intraday and F&O trades</h2>
          <p className="text-secondary small lh-lg">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        {/* Column 3: Free Direct Mutual Funds */}
        <div className="col-md-4 p-4">
          <img 
            src="/media/pricingMF.svg" 
            alt="Free direct MF" 
            className="mb-4 img-fluid"
            style={{ maxHeight: "160px" }}
          />
          <h2 className="fs-4 fw-normal text-dark mb-3">Free direct MF</h2>
          <p className="text-secondary small lh-lg">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;