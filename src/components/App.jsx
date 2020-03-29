import React from "react";
import NavBar from "./NavBar.jsx";
import Counters from "./Counters.jsx";

export default class App extends React.Component {

  render() {
    
    return (
      <div className="App">
        <NavBar />
        <Counters />
      </div>
    );
  }
}
