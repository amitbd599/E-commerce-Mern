import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const SkeletonBar = ({ count, width }) => {
  return (
    <SkeletonTheme baseColor="#f5f5f5" highlightColor="#ececec">
      <Skeleton count={count} width={width} height={12} />
    </SkeletonTheme>
  );
};

export default SkeletonBar;
