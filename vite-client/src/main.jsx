import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";
// Router
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import axios from "axios";

axios.defaults.baseURL = "http://3.137.191.150"; // 'http://localhost:3001'

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
