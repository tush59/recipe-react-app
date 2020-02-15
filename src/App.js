import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    person:[
        {name:'test', age:'30'},
        {name:'sdsd', age:'32'},
        {name:'sdf', age:'22'},
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <span> This really works </span>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}> Hello there </Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
      </div>
    );
  }
}

export default App;
