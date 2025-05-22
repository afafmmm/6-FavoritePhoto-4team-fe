'use client'

import { Children, useEffect, useState } from 'react';
import HomeFallback from './HomeFallback';

export default function SkeletonCardLayout({children}) {
  return(
    <>
    <HomeFallback>
    {children}
    </HomeFallback>
    </>
  )
}
