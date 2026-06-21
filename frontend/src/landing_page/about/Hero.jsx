import React from "react";

function Hero() {
  return (
    <div className="container">
      
      {/* Heading Section */}
      <div className="row p-5 mt-5 mb-5 text-center">
        <h1 className="fs-3 text-dark mb-3" style={{ fontWeight: "500" }}>
          We pioneered the discount broking model in India.
        </h1>
        <p className="fs-5 text-muted" style={{ fontWeight: "400" }}>
          Now, we are breaking ground with our technology.
        </p>
      </div>

      {/* Two Column Paragraph Section */}
      <div 
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
      >
        
        {/* Left Column */}
        <div className="col-md-6 px-5 py-3">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company Zerodha,
            a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have made
            us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over 15%
            of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-md-6 px-5 py-3">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.  
          </p>
          
          <p>
            <a href="#" className="text-decoration-none">Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="#" className="text-decoration-none">blog</a> or see what the media is{" "}
            <a href="#" className="text-decoration-none">saying about us</a> or learn more about our
            business and product <a href="#" className="text-decoration-none">philosophies</a>.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;