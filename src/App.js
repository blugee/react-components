import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import ViewStudents from './Components/ViewStudents';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MenuBar from './Components/MenuBar';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter history={history}>
          <div>
            <MenuBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/add-users" component={AddStudent} />
            <Route exact path="/view-users" component={ViewStudents} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);
