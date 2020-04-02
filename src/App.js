import React, { Component } from "react";
import Wrapper from "./Components/Wrapper";
import Quote from "./Components/Quote";
import QuoteContainer from "./Components/QuoteContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderComponent from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div>
      
      <Router>
      <div>
        <ul>
          <li>
            <Link 
            
            to="/">Home</Link>
          </li>
          <li>
            <Link to="/Game">Play Memory Game</Link>
          </li>
          <li>
            <Link to="/Quote">Read Quotes</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <HeaderComponent />
          </Route>
          <Route path="/Game">
            <Wrapper />
          </Route>
          <Route path="/Quote">
            <QuoteContainer />
          </Route>
        </Switch>
      </div>
    </Router>
        </div>
  );
}


export default App;
