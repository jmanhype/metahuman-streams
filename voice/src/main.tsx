import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './pages/Navigation'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navigation />
    </Router>
  </React.StrictMode>
);
