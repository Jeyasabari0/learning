import { Button } from '@mui/material'
import React from 'react'

function Child({change}) {
  return (
    <div>
      <Button variant='outlined' onClick={()=>change('BYE FROM CHILD')}>Change greet</Button>
    </div>
  )
}

export default Child
