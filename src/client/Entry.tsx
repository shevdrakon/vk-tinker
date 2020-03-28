import React from 'react';

import ThemeProvider from './themes/ThemeProvider';
import StoreProvider from './store/StoreProvider';
import RootRouter from './routes/RootRouter';

const Entry = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <RootRouter />
      </StoreProvider>
    </ThemeProvider>
  );
};

export default Entry;
