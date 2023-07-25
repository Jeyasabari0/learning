import { Button } from '@mui/material';
import React,{useState} from 'react'

function CounterFunction() {

    const [name, setName] = useState('John');
    const [age, setAge] = useState(42);
  
    function handleNameChange(e) {setName(e.target.value)}
  
    function handleAgeChange() {setAge(age + 1)}
  
  return (
    <div>
       <input value={name} onChange={handleNameChange}/>
      <Button onClick={handleAgeChange}>Increment age</Button>
      <p>Hello, {name}. You are {age}.</p>
    </div>
  )
}

export default CounterFunction
