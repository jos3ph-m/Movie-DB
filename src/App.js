import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';

function App() {
  return (
    <Switch>
      <Router path="/" exact />
    </Switch>
  );
}

export default App;
