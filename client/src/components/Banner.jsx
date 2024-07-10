import React from 'react'
import FeatureStore from '../store/FeatureStore';
import ImgSkeleton from '../skeleton/ImgSkeleton';
import SkeletonBar from '../skeleton/SkeletonBar';
import { Link } from 'react-router-dom';

const Banner = () => {
  let { FeatureList } = FeatureStore();
  return (
    <>
      {/* banner start */}
      <div className="grid-banner banner mt-200 overflow-hidden">
        <div className="collection-tab-inner mt-0">
          <div className="container">
            <div className="grid-container-2">
              <Link
                className="grid-item grid-item-1 position-relative rounded mt-0 d-flex"
                to="/product-all/1"
                data-aos="fade-right"
                data-aos-duration={700}
              >
                {FeatureList !== null ? (
                  <img
                    className="banner-img rounded"
                    src={FeatureList[0]?.img}
                    alt="banner-1"
                  />
                ) : (
                  <div className="banner-img rounded">
                    <div className="banner-img rounded">
                      <ImgSkeleton height={250} />
                    </div>
                  </div>
                )}

                {FeatureList !== null ? (
                  <div className="content-absolute content-slide">
                    <div className="container height-inherit d-flex">
                      <div className="content-box banner-content p-4">
                        <h2 className="heading_34 primary-color">
                          {FeatureList[0]?.title}
                        </h2>
                        <p className="text_14 mt-2 primary-color">
                          {FeatureList[0]?.sub_title}
                        </p>
                        <span className="text_12 mt-4 link-underline d-block primary-color">
                          {FeatureList[0]?.button_title}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="content-slide">
                    <div className="container height-inherit d-flex">
                      <SkeletonBar count={12} width={200} />
                    </div>
                  </div>
                )}
              </Link>
              <Link
                className="grid-item grid-item-2 position-relative rounded mt-0 d-flex"
                to="/product-all/1"
                data-aos="fade-right"
                data-aos-duration={700}
              >
                {FeatureList !== null ? (
                  <img
                    className="banner-img rounded"
                    src={FeatureList[1]?.img}
                    alt="banner-1"
                  />
                ) : (
                  <div className="banner-img rounded">
                    <ImgSkeleton height={250} />
                  </div>
                )}

                {FeatureList !== null ? (
                  <div className="content-absolute content-slide">
                    <div className="container height-inherit d-flex justify-content-end">
                      <div className="content-box banner-content p-4 text-end">
                        <h2 className="heading_34 primary-color">
                          {FeatureList !== null ? (
                            FeatureList[1]?.title
                          ) : (
                            <SkeletonBar count={2} width={200} />
                          )}
                        </h2>
                        <p className="text_14 mt-2 primary-color">
                          {FeatureList !== null ? (
                            FeatureList[1]?.sub_title
                          ) : (
                            <SkeletonBar count={2} width={200} />
                          )}
                        </p>
                        <span className="text_12 mt-4 link-underline d-block primary-color">
                          {FeatureList !== null ? (
                            FeatureList[1]?.button_title
                          ) : (
                            <SkeletonBar count={2} width={200} />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="content-slide">
                    <div className="container height-inherit d-flex">
                      <SkeletonBar count={12} width={200} />
                    </div>
                  </div>
                )}
              </Link>
              <Link
                className="grid-item grid-item-3 position-relative rounded mt-0 d-flex"
                to="/product-all/1"
                data-aos="fade-left"
                data-aos-duration={700}
              >
                {FeatureList !== null ? (
                  <img
                    className="banner-img rounded"
                    src={FeatureList[2]?.img}
                    alt="banner-1"
                  />
                ) : (
                  <div className="banner-img rounded">
                    <ImgSkeleton height={250} />
                  </div>
                )}

                {FeatureList !== null ? (
                  <div className="content-absolute content-slide">
                    <div className="container height-inherit d-flex">
                      <div className="content-box banner-content p-4">
                        <h2 className="heading_34 primary-color">
                          {FeatureList !== null ? (
                            FeatureList[2]?.title
                          ) : (
                            <SkeletonBar count={2} width={400} />
                          )}
                        </h2>
                        <p className="text_14 mt-2 primary-color">
                          {FeatureList !== null ? (
                            FeatureList[2]?.sub_title
                          ) : (
                            <SkeletonBar count={2} width={400} />
                          )}
                        </p>
                        <span className="text_12 mt-4 link-underline d-block primary-color">
                          {FeatureList !== null ? (
                            FeatureList[2]?.button_title
                          ) : (
                            <SkeletonBar count={2} width={400} />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="content-slide">
                    <div className="container height-inherit d-flex">
                      <SkeletonBar count={30} width={520} />
                    </div>
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default Banner