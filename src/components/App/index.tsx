import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from '../../routes/';
import AppContextProvider from '../../components/AppContextProvider';
import Shell from '../../components/common/Shell';

const App = (): JSX.Element => {
  const history = createBrowserHistory({ basename: '/' });

  return (
    <AppContextProvider>
      <Shell history={history}>
        <Router history={history}>
          <Routes />
        </Router>
      </Shell>
    </AppContextProvider>
  );
};

export default App;
