import React, { useContext } from 'react'
import { UserContext,admincontext } from './ContextFunction'

function ComponentC() {
 
const user=useContext(UserContext)
const admin=useContext(admincontext)

  return (
    <div>
       --- Using Function ---
     <div>UserName : {user} - AdminName : {admin}</div>
    </div>
  )
}

export default ComponentC
