import React from 'react'
import './Nav.module.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate()
  return (
    <div className='routers'>
      <h1>HOME</h1>
      <Button variant='contained' onClick={()=>navigate('order')}>Order</Button>
    </div>
  )
}

export default Home
