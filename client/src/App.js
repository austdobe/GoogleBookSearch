import React, { Component } from "react";
import MainContainer from './components/MainContainer'
const styling ={
  App:{
    backgroundColor: '#6c5b7b',
    minHeight: "100vh"
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={styling.App}>
        <MainContainer />
      </div>
    );
  }
}

export default App;
