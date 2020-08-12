import React, { Suspense } from 'react';
import LoadingPage from '../LoadingPage';
import { HasChildrenProps } from '../../types';

const LazyLoader = ({ children }: HasChildrenProps) => (
  <Suspense fallback={<LoadingPage />}>{children}</Suspense>
);

export default LazyLoader;
