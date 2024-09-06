// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/routes";
import "./App.css";
import Layout from "./components/Layout/Layout";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <div data-testid="app-page">
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
