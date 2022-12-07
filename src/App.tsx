import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
//import './App.css';
import AppRouter from './routes.js';
import { defaultTheme } from './styles/theme/default';
import { CyclesContextProvider } from './contexts/CyclesContext';

function App() {
 return (
  <ThemeProvider theme={defaultTheme} >
    <GlobalStyles />
     <CyclesContextProvider>
     <AppRouter />
     </CyclesContextProvider>
  </ThemeProvider>
  )
}

export default App;

//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