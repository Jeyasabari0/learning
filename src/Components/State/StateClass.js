import { Button, Typography } from '@mui/material'
import React, { Component } from 'react'

export class StateClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sabari'
      }
    }
    
 handleChange(){
   this.setState({name:'Fayaz'})
}

  render() {
    return (
      <div>
        <Typography variant='h6' gutterBottom>Changing name by State in Class component by {this.state.name}</Typography>
        <Button variant='contained'onClick={this.handleChange.bind(this)}>Change Name</Button>
      </div>
    )
  }
}

export default StateClass
