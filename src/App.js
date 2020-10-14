import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import { Provider } from 'react-redux'
import store from './Redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
