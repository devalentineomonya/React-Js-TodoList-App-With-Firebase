import "./index.css";

import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { ThemeProvider } from "./components/ui/theme-provider.jsx";
import { AuthProvider } from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
