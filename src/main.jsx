import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from "@mui/material";
import "./index.css";
import { RitrovoThemeContext } from "./theme/RitrovoThemeContext";
import App from "./App";

function getLayout(Component, pageProps) {
  const getLayout = Component.getLayout || ((page) => page);
  // Modify the layout logic as needed
  return (
    <RitrovoThemeContext>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </RitrovoThemeContext>
  );
}

createRoot(document.getElementById('root')).render(
  getLayout(App)
);
