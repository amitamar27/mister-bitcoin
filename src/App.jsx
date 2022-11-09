import "./assets/scss/global.scss";
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


import { Header } from "./components/Header.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { StatisticPage } from "./pages/StatisticPage.jsx";
import { ContactDetailsPage } from "./pages/ContactDetailsPage.jsx";
import { ContactEdit } from "./pages/ContactEdit.jsx";
import { SignupPage } from "./pages/SignupPage.jsx";

export class App extends Component {
  


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main style={{ height: "100vh" }}>
            <Switch>
              <Route component={ContactEdit} path="/edit/:id?" />
              <Route component={ContactDetailsPage} path="/details/:id" />
              <Route component={StatisticPage} path="/statistics" />
              <Route component={ContactPage} path="/contacts" />
              <Route component={SignupPage} path="/signup" />
              <Route component={HomePage} path="/" />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
