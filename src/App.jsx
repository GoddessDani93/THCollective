import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProviderDirectory from './pages/ProviderDirectory';
import ReviewPage from './pages/ReviewPage';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/provider-directory' component={ProviderDirectory} />
        <Route path='/review' component={ReviewPage} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
};

export default App;
