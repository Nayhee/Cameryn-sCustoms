import React from 'react';
import './index.css';
import { StrictMode } from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {Customs} from "./components/Customs";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Router>
      <Customs/>
    </Router>
  </StrictMode>
);