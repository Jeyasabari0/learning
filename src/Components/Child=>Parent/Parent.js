import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [greet,setGreet]=useState('HELLO FROM PARENT')

   const change=(grt)=>{setGreet(grt)}

  return (
    <div>
      <p>{greet}</p>
      <Child change={change}/>
    </div>
  )
}

export default Parent
