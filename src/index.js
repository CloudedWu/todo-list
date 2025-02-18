import React, { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import store from "./store/store"; // 引入创建的store

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <Provider store={ store }>
        <App/>
      </Provider>    
    </Router>
  </StrictMode>
);