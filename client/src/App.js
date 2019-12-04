import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from './components/MainContainer'
import Navbar from "./components/Nav";
import SavedBooks from "./components/SavedBooks"
const styling ={
  App:{
    backgroundColor: '#6c5b7b',
    minHeight: "100vh"
  }
}

function App() {
  return (
    <Router>
      <div style={styling.App}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path ="/api/saveBook" component={SavedBooks} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
