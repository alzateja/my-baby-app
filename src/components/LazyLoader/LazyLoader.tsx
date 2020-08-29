import React, { Suspense } from 'react';
import Loading from '../Loading';
import { HasChildrenProps } from '../../types';

const LazyLoader = ({ children }: HasChildrenProps): JSX.Element => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);

export default LazyLoader;
