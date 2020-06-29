import React from 'react';

interface IImageLazyLoadingContext {
  addImageRef: (ref: Element) => void;
  removeImageRef: (ref: Element) => void;
}

const ImageLazyLoadingContext = React.createContext<IImageLazyLoadingContext>({
  addImageRef: () => {
  },
  removeImageRef: () => {
  },
});

const ImageLazyLoadingContextProvider = (props: { children: React.ReactNode }) => {
  const {children} = props;

  const iObserver = React.useMemo(() => {
    const observerInstance = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.intersectionRatio > 0) {
          const currentImg = en.target as HTMLImageElement;
          const newImgSrc = currentImg.dataset.src;
          // only swap out the image source if the new url exists
          if (!newImgSrc) {
            console.error('Image source is invalid');
          } else {
            currentImg.src = newImgSrc;
          }

          observerInstance.unobserve(currentImg); // detach the observer when done
        }
      });
    });

    return observerInstance;
  }, []);

  React.useEffect(() => {
    return () => {
      iObserver.disconnect();
    }
  }, [iObserver]);

  const contextValue = React.useMemo<IImageLazyLoadingContext>(
    () => ({
      addImageRef: node => {
        iObserver.observe(node);
      },
      removeImageRef: node => {
        iObserver.unobserve(node);
      },
    }),
    [iObserver]
  );

  return <ImageLazyLoadingContext.Provider value={contextValue}>{children}</ImageLazyLoadingContext.Provider>;
};

export {ImageLazyLoadingContextProvider, ImageLazyLoadingContext};
