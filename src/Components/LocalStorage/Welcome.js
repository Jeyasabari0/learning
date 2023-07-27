import { Button } from '@mui/material'
import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import './Style.module.css'

function Welcome() {

  const[login,setLogin]=useState(false)
  const[register,setRegister]=useState(false)

  const regist=()=>{
    setRegister(value=>!value)
    setLogin(false)
  }

  const log=()=>{
    setLogin(value=>!value)
    setRegister(false)
  }

  return (
    <div>
      <Button variant='contained' onClick={regist}>REGISTER</Button><Button variant='contained' onClick={log}>LOGIN</Button>
    {register?<Register/>:''}
    {login?<Login/>:''}
    </div>
  )
}

export default Welcome
