import { Button } from '@mui/material'
import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

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
      <Button onClick={regist}>REGISTER</Button><Button onClick={log}>LOGIN</Button>
    {register?<Register/>:''}
    {login?<Login/>:''}
    </div>
  )
}

export default Welcome
