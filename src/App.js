import React, { Component } from 'react';
import './App.css';
import seedColors from "./seedColors"
import Palette from "./Palette";

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
