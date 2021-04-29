import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { FourHundredFour } from "./components/404";
import { Main } from "./components/main";

export const App: React.FC = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="*" component={FourHundredFour} />
        </Switch>
    </Router>
  );
}

export default App;