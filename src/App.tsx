import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import JsonProvide from 'src/contexts/config';
import EditorPage from './pages/Editor';
import FormPage from './pages/Form';
import Menu from './components/menu';

import { BASE_PATH, ROUTE } from './constans/routes';

import './App.scss';

function App() {
  return (
    <JsonProvide>
      <BrowserRouter basename={BASE_PATH}>
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
            <Route exact path="/">
              <Redirect to={ROUTE.EDITOR} />
            </Route>
            <Route path={ROUTE.EDITOR} component={EditorPage} />
            <Route path={ROUTE.FORM} component={FormPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </JsonProvide>
  );
}

export default App;
