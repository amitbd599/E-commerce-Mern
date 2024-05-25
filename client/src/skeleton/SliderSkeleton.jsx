import React from 'react';
import Lottie from 'react-lottie';
import Skeleton from "../helper/loading/Skeleton.json"
const SliderSkeleton = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Skeleton,
   
  };

  return (
    <div className="slide-item slide-item-bag position-relative height-inherit d-flex align-items-center justify-content-center py-5">
      <Lottie options={defaultOptions} height={500} />
      <Lottie options={defaultOptions} height={500} />
    </div>
  );
};

export default SliderSkeleton;
