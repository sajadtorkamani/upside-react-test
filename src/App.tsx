import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppProvider from './components/AppProvider';
import HomeView from './views/home';
import CreatePizzaView from './views/create-pizza';
import { CREATE_PIZZA_ROUTE, HOME_ROUTE } from './lib/constants';

const App: React.FC = () => (
  <AppProvider>
    <Router>
      <Switch>
        <Route exact path={HOME_ROUTE}>
          <HomeView />
        </Route>

        <Route path={CREATE_PIZZA_ROUTE}>
          <CreatePizzaView />
        </Route>
      </Switch>
    </Router>
  </AppProvider>
);

export default App;
