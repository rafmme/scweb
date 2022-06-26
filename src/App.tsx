import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Pages from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Pages.Home />
        </Route>
        <Route path='/add-product' exact>
          <Pages.AddProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
