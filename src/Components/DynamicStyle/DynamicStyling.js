import React, { useState } from 'react'
import styles from './DynamicStyling.module.css'

function DynamicStyling() {

const [color,setColor]=useState(false)

  return (
    <div className={styles.body}>
      <button className={styles.button} style={{backgroundColor:color?'red':'green'}} onClick={()=>{setColor(color=>!color)}}>color</button>
    </div>
    
  )
}

export default DynamicStyling
