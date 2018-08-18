import React, { Component } from 'react';
import './App.css';
import Output from './Output.js';
import Input from './Input.js';
import Validation from './Validation.js';
import Char from './Char.js';

class App extends Component {
  state = {
    name: "Alex",
    size: 4
  }

  InsertNameHandler = (event) => {
    this.setState({
      name : event.target.value,
      size: event.target.value.length
    }) 
  }

DeleteLetterHandler = (i) => {
  const oldName = this.state.name
  let newName = oldName.slice(0,i) + oldName.slice(i+1)
this.setState({
      name : newName,
      size: newName.length
    }) 
}

  render() {
   let charSeq = Array.from(this.state.name)
    let chars = (
      <div>
        {charSeq.map((letter, index) => {
        return <Char name = {this.state.name} click = {() => this.DeleteLetterHandler(index)} char = {letter} key={index}/>
      
        })}
      </div>
      );

    

    return (
      <div className="App">
        <Input name={this.state.name} changed = {this.InsertNameHandler}/>
        <Output name = {this.state.name} size={this.state.size}/>
        <Validation name = {this.state.name} />
        {chars}
      </div>
    );
  }
}

export default App;
