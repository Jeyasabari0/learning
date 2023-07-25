import React, { Component } from 'react'
import { Button } from '@mui/material';
class CounterClass extends Component {

 state = {name: 'John',age: 42,};
 
  handleNameChange = (e) => this.setState({name: e.target.value})
  
  handleAgeChange = () => this.setState({age: this.state.age + 1 })
  
  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleNameChange}/>
        <Button onClick={this.handleAgeChange}>Increment age</Button>
        <p>Hello, {this.state.name}. You are {this.state.age}.</p>
      </div>
    )}}

export default CounterClass
