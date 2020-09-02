import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from '../../routes/';
import AppContextProvider from '../../components/AppContextProvider';
import AppShell from '../common/AppShell';

const App = (): JSX.Element => {
  const history = createBrowserHistory({ basename: '/' });

  return (
    <AppContextProvider>
      <AppShell history={history}>
        <Router history={history}>
          <Routes />
        </Router>
      </AppShell>
    </AppContextProvider>
  );
};

export default App;
