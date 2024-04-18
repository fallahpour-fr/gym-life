import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./theme/muiconfig";
import { StyledEngineProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </StyledEngineProvider>
    </React.StrictMode>
  </ThemeProvider>,
);
