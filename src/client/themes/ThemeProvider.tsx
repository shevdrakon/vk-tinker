import React from 'react';

import {ThemeProvider as MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: deepPurple,
  }
});

interface IThemeProviderProps {
  children: React.ReactNode | React.ReactNodeArray;
}

const ThemeProvider = (props: IThemeProviderProps) => {
  const {children} = props;

  return <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
};

export default ThemeProvider;
