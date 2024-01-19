import { memo } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = memo(({ ...props }: SkeletonProps) => {
    return <Skeleton {...props} baseColor='#ebebeb' highlightColor='#0404416b' inline />;
});

export default SkeletonLoader;
