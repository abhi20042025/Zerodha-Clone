import React from 'react';

function Education() {
    return (
        <div className='container p-5'>

            <div className='row align-items-center'>

                {/* Left Side Image */}
                <div className='col-lg-6 col-md-12 text-center'>

                    <img
                        src='/media/education.svg'
                        alt='Education'
                        className='img-fluid'
                        style={{ width: "80%" }}
                    />

                </div>

                {/* Right Side Content */}
                <div className='col-lg-6 col-md-12'>

                    <h1 className='mb-3'>
                        Free and open market education
                    </h1>

                    <p>
                        Varsity, the largest online stock market
                        education book in the world covering
                        everything from the basics to advanced trading.
                    </p>

                    <a
                        href='/'
                        style={{ textDecoration: "none" }}
                    >
                        Varsity{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>

                    <p className='mt-4'>
                        TradingQ&A, the most active trading and
                        investment community in India for all your
                        market related queries.
                    </p>

                    <a
                        href='/'
                        style={{ textDecoration: "none" }}
                    >
                        TradingQ&A{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>

                </div>

            </div>

        </div>
    );
}

export default Education;