import React from "react";

function Footer() {
  return (
    <footer
      className="border-top mt-5"
      style={{ backgroundColor: "#fbfbfb" }}
    >
      <div className="container py-5">
        {/* Top Section */}
        <div className="row">

          {/* Logo + Social */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="/media/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "55%" }}
              className="mb-3"
            />

            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.8",
              }}
            >
              &copy; 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-4 fs-5 mt-3 text-muted">
              <i className="fa fa-x-twitter"></i>
              <i className="fa fa-facebook-square"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-linkedin"></i>
            </div>

            <hr />

            <div className="d-flex gap-4 fs-5 text-muted">
              <i className="fa fa-youtube-play"></i>
              <i className="fa fa-whatsapp"></i>
              <i className="fa fa-telegram"></i>
            </div>

            {/* Store Buttons */}
            <div className="mt-4 d-flex gap-2">
              <img
                src="/media/googlePlayBadge.svg"
                alt="Google Play"
                style={{ width: "45%" }}
              />

              <img
                src="/media/appstoreBadge.svg"
                alt="App Store"
                style={{ width: "45%" }}
              />
            </div>
          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="mb-4">Account</h4>

            {[
              "Open demat account",
              "Minor demat account",
              "NRI demat account",
              "HUF demat account",
              "Commodity",
              "Dematerialisation",
              "Fund transfer",
              "MTF",
            ].map((item, index) => (
              <p key={index}>
                <a
                  href="/"
                  className="text-decoration-none"
                  style={{ color: "#666" }}
                >
                  {item}
                </a>
              </p>
            ))}
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="mb-4">Support</h4>

            {[
              "Contact us",
              "Support portal",
              "How to file a complaint?",
              "Status of your complaints",
              "Bulletin",
              "Circular",
              "Z-Connect blog",
              "Downloads",
            ].map((item, index) => (
              <p key={index}>
                <a
                  href="/"
                  className="text-decoration-none"
                  style={{ color: "#666" }}
                >
                  {item}
                </a>
              </p>
            ))}
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="mb-4">Company</h4>

            {[
              "About",
              "Philosophy",
              "Press & media",
              "Careers",
              "Zerodha Cares (CSR)",
              "Zerodha.tech",
              "Open source",
              "Referral program",
            ].map((item, index) => (
              <p key={index}>
                <a
                  href="/"
                  className="text-decoration-none"
                  style={{ color: "#666" }}
                >
                  {item}
                </a>
              </p>
            ))}
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h4 className="mb-4">Quick links</h4>

            {[
              "Upcoming IPOs",
              "Brokerage charges",
              "Market holidays",
              "Economic calendar",
              "Calculators",
              "Markets",
              "Sectors",
              "Gift Nifty",
            ].map((item, index) => (
              <p key={index}>
                <a
                  href="/"
                  className="text-decoration-none"
                  style={{ color: "#666" }}
                >
                  {item}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-5">
          <p
            style={{
              fontSize: "12px",
              color: "#9b9b9b",
              lineHeight: "1.8",
            }}
          >
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India.
          </p>

          <p
            style={{
              fontSize: "12px",
              color: "#9b9b9b",
              lineHeight: "1.8",
            }}
          >
            Investments in securities market are subject to market risks;
            read all the related documents carefully before investing.
          </p>

          <p
            style={{
              fontSize: "12px",
              color: "#9b9b9b",
              lineHeight: "1.8",
            }}
          >
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants.
          </p>
        </div>

        {/* Bottom Links */}
        <div
          className="d-flex flex-wrap justify-content-center gap-4 mt-4 pb-3"
          style={{ fontSize: "13px" }}
        >
          <a href="/" className="text-decoration-none text-muted">
            NSE
          </a>

          <a href="/" className="text-decoration-none text-muted">
            BSE
          </a>

          <a href="/" className="text-decoration-none text-muted">
            MCX
          </a>

          <a href="/" className="text-decoration-none text-muted">
            Terms & conditions
          </a>

          <a href="/" className="text-decoration-none text-muted">
            Policies & procedures
          </a>

          <a href="/" className="text-decoration-none text-muted">
            Privacy policy
          </a>

          <a href="/" className="text-decoration-none text-muted">
            Disclosure
          </a>

          <a href="/" className="text-decoration-none text-muted">
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;