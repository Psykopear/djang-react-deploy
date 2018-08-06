import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { text: 'QOOOOOJ' };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          asd
          {this.state.text}
        </p>
        <div onClick={() => this.setState({ text: 'ASDASD' })}>CIAOOO</div>
      </div>
    );
  }
}

export default App;
