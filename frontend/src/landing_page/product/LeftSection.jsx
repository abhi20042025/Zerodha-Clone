import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    // Main layout container with generous top/bottom padding
    <div className="container my-5 py-5 px-5">
      {/* Using row-gap and column-gap controls or offset grids 
        to separate the expanded image and text columns cleanly
      */}
      <div className="row align-items-center justify-content-between">
        
        {/* Left Column: Enlarged to col-md-6 with reduced internal padding */}
        <div className="col-md-6 p-3 text-center">
          <img 
            src={imageURL} 
            alt={productName} 
            className="img-fluid w-100" 
            style={{ maxHeight: "480px", objectFit: "contain" }} // Keeps the larger graphic perfectly bounded
          />
        </div>

        {/* Right Column: Shifted explicitly to col-md-5 to create a crisp 1-column empty space gap */}
        <div className="col-md-5 offset-md-1 p-4">
          {/* Elegant title styling */}
          <h1 className="display-6 fw-normal text-dark mb-4" style={{ color: "#424242" }}>
            {productName}
          </h1>

          {/* Styled paragraph description */}
          <p 
            className="text-muted mb-4" 
            style={{ lineHeight: "1.8", color: "#666", fontSize: "1.05rem" }}
          >
            {productDescription}
          </p>

          {/* Action Links */}
          <div className="mb-4 d-flex gap-5">
            <a 
              href={tryDemo} 
              className="text-decoration-none text-primary d-inline-flex align-items-center fw-medium"
              style={{ fontSize: "1.05rem", color: "#387ed1" }}
            >
              Try demo <span className="ms-2" style={{ fontSize: "0.9rem" }}>➔</span>
            </a>

            <a 
              href={learnMore} 
              className="text-decoration-none text-primary d-inline-flex align-items-center fw-medium"
              style={{ fontSize: "1.05rem", color: "#387ed1" }}
            >
              Learn more <span className="ms-2" style={{ fontSize: "0.9rem" }}>➔</span>
            </a>
          </div>

          {/* App Store Badges */}
          <div className="d-flex gap-3 align-items-center mt-4">
            <a href={googlePlay}>
              <img 
                src="/media/googlePlayBadge.svg" 
                alt="Get it on Google Play" 
                style={{ height: "42px", objectFit: "contain" }}
              />
            </a>

            <a href={appStore}>
              <img 
                src="/media/appstoreBadge.svg" 
                alt="Download on the App Store" 
                style={{ height: "42px", objectFit: "contain" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;