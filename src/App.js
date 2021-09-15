import React from "react"
import "./assets/styles/style.scss"
import List from "./views/User/List"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route path="/users" component={List} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
