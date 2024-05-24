import React from 'react'

const Brand = () => {
    return (
        <>
            {/* brand logo start */}
            <div className="brand-logo-section mt-100">
                <div className="brand-logo-inner">
                    <div className="container">
                        <div className="brand-logo-container overflow-hidden">
                            <div className="scroll-horizontal row align-items-center flex-nowrap">

                                {
                                    [...Array(6)].map((item, index) =>
                                        <div
                                            className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
                                            data-aos="fade-up"
                                            data-aos-duration={700}
                                        >
                                            <a
                                                href="index.html"
                                                className="brand-logo d-flex align-items-center justify-content-center"
                                            >
                                                <img src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/1.png" alt="img" />
                                            </a>
                                        </div>)
                                }



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* brand logo end */}
        </>

    )
}

export default Brand