import React from "react"
import "./assets/styles/style.scss"
import List from "./views/User/List"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route path="/users" component={List} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
