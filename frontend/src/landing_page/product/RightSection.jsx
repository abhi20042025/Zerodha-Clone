import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container my-3">
      <div className="row align-items-center">

        <div className="col-md-6 px-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div className="mb-2">
            <a href={learnMore}>Learn More</a>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;