import React from 'react';

const useInfiniteScroll = (callback) => {
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [callback]);

  const handleScroll = () => {
    const threshold = 0;
    if (document.documentElement.offsetHeight - (threshold + window.innerHeight + document.documentElement.scrollTop) > 0)
      return;

    callback && callback();
  }
};

export default useInfiniteScroll;
