import React from 'react'

const TrustedBadge = () => {
    return (
        <>
            {/* trusted badge start */}
            <div className="trusted-section mt-100 overflow-hidden">
                <div className="trusted-section-inner">
                    <div className="container">
                        <div className="row justify-content-center trusted-row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="trusted-badge rounded p-0">
                                    <div className="trusted-icon">
                                        <img
                                            className="icon-trusted"
                                            src="assets/img/trusted/1.png"
                                            alt="icon-1"
                                        />
                                    </div>
                                    <div className="trusted-content">
                                        <h2 className="heading_18 trusted-heading">
                                            Free Shipping &amp; Return
                                        </h2>
                                        <p className="text_16 trusted-subheading trusted-subheading-2">
                                            On all order over $99.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="trusted-badge rounded p-0">
                                    <div className="trusted-icon">
                                        <img
                                            className="icon-trusted"
                                            src="assets/img/trusted/2.png"
                                            alt="icon-2"
                                        />
                                    </div>
                                    <div className="trusted-content">
                                        <h2 className="heading_18 trusted-heading">
                                            Customer Support 24/7
                                        </h2>
                                        <p className="text_16 trusted-subheading trusted-subheading-2">
                                            Instant access to support
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="trusted-badge rounded p-0">
                                    <div className="trusted-icon">
                                        <img
                                            className="icon-trusted"
                                            src="assets/img/trusted/3.png"
                                            alt="icon-3"
                                        />
                                    </div>
                                    <div className="trusted-content">
                                        <h2 className="heading_18 trusted-heading">
                                            100% Secure Payment
                                        </h2>
                                        <p className="text_16 trusted-subheading trusted-subheading-2">
                                            We ensure secure payment!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* trusted badge end */}
        </>

    )
}

export default TrustedBadge