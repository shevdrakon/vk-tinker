import React from 'react';

import {ImageLazyLoadingContext} from './ImageLazyLoadingContext';

const useImageLazyLoading = () => {
  const nodeRef = React.useRef();
  const {addImageRef, removeImageRef} = React.useContext(ImageLazyLoadingContext);

  const trackedRef = React.useCallback(node => {
    if (node) {
      addImageRef(node);
    } else {
      removeImageRef(nodeRef.current);
    }

    nodeRef.current = node;
  }, []);

  return [trackedRef];
};

export default useImageLazyLoading;
