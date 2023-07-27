import React, { Component } from 'react'
import { Button, TextField } from '@mui/material'

export class UseEffectClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `clicked ${this.state.count} times`
        console.log('mounted')
    }

    componentDidUpdate(prevProps,prevState) {
        if (prevState.count !== this.state.count) {  
            console.log('updated')
            document.title = `clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <TextField variant='standard' type='text' label='Name' value={this.state.name}
                    onChange={(e) => { this.setState({ name: e.target.value }) }} />
                <Button onClick={() => this.setState({ count: this.state.count + 1 })}>clicked {this.state.count} times</Button>
            </div>
        )
    }
}

export default UseEffectClass
