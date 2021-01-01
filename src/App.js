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
// redux
import { connect } from 'react-redux'
// 

function App(props) {

      return (
            <div className="App">
                  <Router>
                        <Switch>
                              <Route exact path="/">
                                    <Login />
                              </Route>
                              <Route exact path="/dashboard">
                                    <MainDashboard />
                              </Route>
                              <Route exact path="/daycalender">
                                    <Daycalender />
                              </Route>
                              <Route exact path="/profile">
                                    <div>hiiiii</div>
                              </Route>



                        </Switch>
                  </Router>
                  {/* redux */}
                  {/* <div>name:{props.myname}</div> */}
            </div>
      );
}
const mapStateToProps = (state) => {
      return {
            myname: state.name
      }
}

export default connect(mapStateToProps)(App);
