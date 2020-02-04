import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import AppProvider from './components/AppProvider';
import HomeView from './views/home';
import CreateOrderView from './views/create-order';
import {
  CREATE_ORDER_ROUTE,
  HOME_ROUTE,
  PREVIOUS_ORDERS_ROUTE
} from './lib/constants';
import PreviousOrdersView from './views/previous-orders';
import appHistory from './lib/appHistory';

const App: React.FC = () => (
  <AppProvider>
    <Router history={appHistory}>
      <Switch>
        <Route exact path={HOME_ROUTE}>
          <HomeView />
        </Route>

        <Route path={CREATE_ORDER_ROUTE}>
          <CreateOrderView />
        </Route>

        <Route path={PREVIOUS_ORDERS_ROUTE}>
          <PreviousOrdersView />
        </Route>
      </Switch>
    </Router>
  </AppProvider>
);

export default App;
