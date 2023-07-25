import { Button, Typography } from '@mui/material'
import React, { Component } from 'react'
import PrpsFunction from './PrpsFunction'
export class PrpsClass extends Component {

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
        <div>getting props{this.props.msg}</div>
        <Typography variant='h6' gutterBottom>Changing name by State in Class component by {this.state.name}</Typography>
        <Button variant='contained'onClick={this.handleChange.bind(this)}>Change Name</Button>
        <PrpsFunction name={this.state.name}/>
      </div>
    )
  }
}

export default PrpsClass
