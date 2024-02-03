<<<<<<< Updated upstream
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <NextUIProvider>
    <main className="dark text-foreground bg-background">
    <App />
    </main>
    </NextUIProvider>
  </React.StrictMode>
)
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import ContextState from "./components/Context/ContextState.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <ContextState>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </NextUIProvider>
    </ContextState>
  </React.StrictMode>
);
>>>>>>> Stashed changes
