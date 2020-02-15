import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const FunctionalApp= () => {
  
  var [personState, SetPersonState]= useState({
    person:[
        {name:'test from state', age:'30'},
        {name:'sdsd', age:'32'},
        {name:'sdf', age:'22'},
    ]
  });  
 const clickHandler = () =>{
  SetPersonState({
    person:[
      {name:'hooks', age:'30'},
      {name:'check', age:'31'},
      {name:'new', age:'32'},
  ]
  });
}

  

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">New functional component</h1>
        </header>
        <span > This really works </span>
        <button onClick={clickHandler}  > Click. </button>
        <Person name={personState.person[0].name}   age={personState.person[0].age}> Hello there </Person>
        <Person name={personState.person[1].name} age={personState.person[1].age} />
      </div>
    );
  
}

export default FunctionalApp;


