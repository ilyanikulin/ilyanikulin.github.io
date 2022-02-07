import React from 'react';
import {
  HashRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import JsonProvide from 'src/contexts/config';
import EditorPage from './pages/Editor';
import FormPage from './pages/Form';
import Menu from './components/menu';

import { ROUTE } from './constans/routes';

import './App.scss';

function App() {
  return (
    <JsonProvide>
      <HashRouter>
        <Menu routes={[
          {
            label: 'Config',
            path: ROUTE.EDITOR,
          },
          {
            label: 'Result',
            path: ROUTE.FORM,
          },
        ]}
        />
        <div className="page-content">
          <Switch>
            <Route path={ROUTE.EDITOR} component={EditorPage} />
            <Route exact path="/">
              <Redirect to={ROUTE.EDITOR} />
            </Route>
            <Route path={ROUTE.FORM} component={FormPage} />
          </Switch>
        </div>
      </HashRouter>
    </JsonProvide>
  );
}

export default App;
