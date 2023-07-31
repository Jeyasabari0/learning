import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(){}

    render() {
        if (this.state.hasError) {
            return <hi>Something Went wrong !</hi>
        }
        return this.props.children
    }
}

export default ErrorBoundary
