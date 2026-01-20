import { BrowserRouter as Router, Route } from 'react-router-dom';
import ErrorPage from './components/layouts/error';
import { Main } from '@features/weather/components/Main';

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="*" component={ErrorPage} />
    </Router>
  );
};

export default App;
