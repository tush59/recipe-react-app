import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import FunctionalApp from './FunctionalApp';
class App extends Component {
  state={
    person:[
        {name:'test from state', age:'30'},
        {name:'sdsd', age:'32'},
        {name:'sdf', age:'22'},
    ]
  }

  clickHandler= () =>{
    console.log("clicked!!");
    this.setState(
          {
          person: [
          {name:'updated name', age:50},
          {name:'heie', age: '56'},
          {name:'test', age:'54'}
          ] 
        }
    );
  }
  copyHandler= (e) =>{
    console.log("copied!!");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <span onCopy={this.copyHandler}> This really works </span>
        <button onClick={this.clickHandler}  > Click. </button>
        <Person name={this.state.person[0].name}   age={this.state.person[0].age}> Hello there </Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
        ---------------------------------
        <FunctionalApp />
      </div>
    );
  }
}

export default App;
