import { Button } from '@mui/material'
import React, { Component } from 'react'
import withCounter from './withCounter'

export class Click extends Component {
    render() {

        const { count, incrementCount } = this.props

        return (
            <div>
                <Button onClick={incrementCount}>{this.props.name} Clicked {count} times</Button>
            </div>
        )
    }
}

export default withCounter(Click)
