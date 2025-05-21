'use client'

import { useEffect, useState } from 'react';
import HomeFallback from './HomeFallback';

export default function ResponsiveFallbackWrapper() {
  const [count, setCount] = useState(15);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 1480) setCount(16); // md
    else setCount(15);
  }, []);

  return <HomeFallback count={count} />;
}
