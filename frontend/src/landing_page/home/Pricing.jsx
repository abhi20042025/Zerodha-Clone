import React from 'react';

function Pricing() {
    return (
        <div className='container p-5'>

            <div className='row align-items-center'>

                <div className='col-lg-4 col-md-12'>

                    <h1 className='mb-3'>
                        Unbeatable pricing
                    </h1>

                    <p>
                        We pioneered the concept of discount broking
                        and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>

                    <a
                        href='/'
                        style={{ textDecoration: "none" }}
                    >
                        See Pricing{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>

                </div>

                <div className='col-lg-2'></div>

                <div className='col-lg-6 col-md-12'>
                    <div className='row  text-center'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery  and <br/>direct mutual funds </p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Pricing;