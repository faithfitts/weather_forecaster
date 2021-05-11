import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Forecast from "./components/Forecast";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Forecast} />
      </div>
    );
  }
}
export default App;
