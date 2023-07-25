import React from 'react'
import { Button, ButtonGroup, Box } from '@mui/material'
function MaterialUI() {
  return (
    <div>
      <ButtonGroup size='medium' orientation='vertical'>
        <Button variant="contained">Hello World</Button>
        <Button variant="text">Hello World</Button>
        <Button variant="outlined">Hello World</Button>
      </ButtonGroup>

      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
            opacity: [1, 1, 1],
          },
        }} />


    </div>
  )
}

export default MaterialUI
