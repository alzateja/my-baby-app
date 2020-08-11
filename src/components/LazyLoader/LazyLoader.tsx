import React, {Suspense, ReactNode} from 'react'
import LoadingPage from '../LoadingPage'



export interface LazyLoaderProps  {
   children: ReactNode
}


const LazyLoader = ({children}:LazyLoaderProps) => <Suspense fallback={<LoadingPage/>}>{children}</Suspense>

export default LazyLoader
