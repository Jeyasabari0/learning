import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialstate = {
    loading: true,
    post: {},
    error: ''

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'failure':
            return {
                loading: false,
                post: {},
                error: 'Something Went Wrong !'
            }


        default: return state

    }
}

function UsingReducerAxios() {

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'success', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'failure' })
            })
    }, [])

    const [state, dispatch] = useReducer(reducer, initialstate)

    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default UsingReducerAxios
