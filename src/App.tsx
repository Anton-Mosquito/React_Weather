import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FourHundredFour } from './components/404';
import { Main } from '@features/weather/components/Main';

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="*" component={FourHundredFour} />
    </Router>
  );
};

export default App;
