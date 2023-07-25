import { Button, Typography } from '@mui/material'
import React from 'react'

function Dashboard() {
const handleclick=()=>{
  localStorage.clear()
  window.location.reload()
}

const logout=()=>{
  localStorage.removeItem('signup')
  window.location.reload()

}

  return (
    <div>
      <Typography variant='h3'>WELCOME {localStorage.getItem('user')} !!!</Typography>
      <div>
      <Button onClick={handleclick} variant='outlined'>DELETE ACCOUNT</Button>
      <Button onClick={logout} variant='outlined'>LOG OUT</Button>
      </div>
    </div>
  )
}

export default Dashboard
