import './App.css';
import { Component } from 'react';
import seedColors from "./seedColors"
import Palette from './Palette';

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
