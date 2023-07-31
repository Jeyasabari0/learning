import React, { useEffect, useState } from 'react'

function UsingAsync() {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    async function getData() {

        const api = ('https://jsonplaceholder.typicode.com/users')
        const result = await fetch(api)
        const getResult = await result.json()
        setData(getResult)

    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            {data.map(record => (<ul><li key={record.id}>{record.id}-{record.name}</li></ul>))}
        </div>
    )
}

export default UsingAsync
