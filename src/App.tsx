import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { FourHundredFour } from "./components/404";
import { Main } from "./components/main";

export const App: React.FC = () => {
  return (
    <Router>
          <Route exact path="/" component={Main} />
          <Route path="*" component={FourHundredFour} />
    </Router>
  );
}

export default App;
