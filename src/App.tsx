import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EditorPage from './pages/Editor';
import FormPage from './pages/Form';
import JsonProvide from './contexts/json';
import Menu from './components/menu';

import { ROUTE } from './constans/routes';

import './App.scss';

function App() {
  return (
    <JsonProvide>
      <BrowserRouter>
        <Menu routes={[
          {
            label: 'Editor',
            path: ROUTE.EDITOR,
          },
          {
            label: 'Form',
            path: ROUTE.FORM,
          },
        ]}
        />
        <div className="page-content">
          <Switch>
            <Route path={ROUTE.EDITOR} component={EditorPage} />
            <Route path={ROUTE.FORM} component={FormPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </JsonProvide>
  );
}

export default App;
