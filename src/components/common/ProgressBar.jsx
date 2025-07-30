import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
      const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
      };
  
      window.addEventListener("scroll", updateScrollProgress);
      return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);
  return (
    <div className="fixed top-0 left-0 w-full z-50">
    <div className="h-1 bg-black">
      <div
        className="h-1 bg-crayola transition-all duration-200 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  </div>
  )
}

export default ProgressBar