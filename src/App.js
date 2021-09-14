import React from "react"
import "./assets/styles/style.scss"
import Users from "./views/User/Users"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
