import React from 'react';
import Lottie from 'react-lottie';
import Skeleton from '../helper/loading/placeholder_img.json';
const ImgSkeleton = ({ height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Skeleton,
  };

  return (
    <div className="slide-item slide-item-bag position-relative height-inherit d-flex align-items-center justify-content-center ">
      <Lottie options={defaultOptions} height={height} />
    </div>
  );
};

export default ImgSkeleton;
