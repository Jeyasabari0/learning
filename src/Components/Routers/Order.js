import React from 'react'
import './Nav.module.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Order = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h2> order confirm!</h2>
      <Button variant='contained' onClick={() => navigate('/')}>Back</Button>
    </div>
  )
}

export default Order
