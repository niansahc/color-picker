import React, { Component } from 'react';
import './App.css';
import seedColors from "./seedColors"
import Palette from "./Palette";
import { generatePalette } from "./ColorHelper";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
