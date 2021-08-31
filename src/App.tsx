import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Login from './components/Login';
import Register from './components/Register';
import _appConfig from './config/app.config';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
