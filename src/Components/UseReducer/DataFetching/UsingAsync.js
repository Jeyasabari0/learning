import React, { useEffect, useState } from 'react'

function UsingAsync() {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  async function getData() {
    try {
      const api = ('https://jsonplaceholder.typicode.com/users')
      const result = await fetch(api)
      if (!result.ok) {
        throw Error('Something Went Wrong !')
      }
      const getResult = await result.json()
      setData(getResult)
    }
    catch (err) {
      alert(`can't reach the api`, setError(err.message))
    }

  }

  useEffect(() => { getData() }, [])
  return (
    <div>
      {error && <div>{error}</div>}
      {data.map(record => (<div key={record.id}>{record.id}-{record.name}</div>))}
    </div>
  )
}

export default UsingAsync
