import { Button, Typography } from '@mui/material'
import React from 'react'

function Dashboard() {

const logout=()=>{
  window.location.reload()
}

  return (
    <div>
      <Typography variant='h3'>WELCOME {localStorage.getItem('user')} !!!</Typography>
      <div>
      <Button onClick={logout} variant='outlined'>LOG OUT</Button>
      </div>
    </div>
  )
}

export default Dashboard
