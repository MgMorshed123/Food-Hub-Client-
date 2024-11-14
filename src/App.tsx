import React from "react";
import { Button } from "./components/ui/button";
import Login from "./auth/login";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Login></Login>
      </Router>
    </div>
  );
};

export default App;
