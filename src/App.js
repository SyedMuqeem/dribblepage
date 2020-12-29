import React from 'react'
import Axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import './App.css';
import Login from './Screens/Login';
import MainDashboard from './Screens/MainDashboard';
import Daycalender from './components/Daycalender';

function App() {
  return (
    <div className="App">
          <Router>
                    <Switch>
                                <Route exact path="/">
                                      <Login/>
                                </Route>
                                <Route exact path="/dashboard">
                                      <MainDashboard/>
                                </Route>
                                <Route exact path="/daycalender">
                                      <Daycalender/>
                                </Route>
                                
                                
                                
                    </Switch>
        </Router>
    </div>
  );
}

export default App;
