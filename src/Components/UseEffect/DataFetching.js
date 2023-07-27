import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, TextField } from '@mui/material'

function DataFetching() {
    const [posts, setPosts] = useState({})
    const[id,setId]=useState(1)
    const[click,setClick]=useState()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [click])

    return (
        <div>
            <TextField variant='standard' label='ID' value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <Button variant='contained' onClick={clicks=>{setClick(id)}}>FETCH</Button>
            <ul><li>{posts.title}</li></ul>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div >
    )
}

export default DataFetching
