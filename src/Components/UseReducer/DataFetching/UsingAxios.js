import React, { useEffect, useState } from 'react'



function UsingFetching() {

    const [data,setData]=useState([])

    async function getData(){
        const api=('https://jsonplaceholder.typicode.com/users')
        const result=await fetch(api)
        const getResult=await result.json()
        setData(getResult)
    }

   

    useEffect(()=>{getData();},[])
  return (
    <div>
      {data.map(record=>(<ul><li key={record.id}>{record.name}</li></ul>))}
    </div>
  )
}

export default UsingFetching
