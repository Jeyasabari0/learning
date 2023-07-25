import React, { useState } from 'react'
import TwowayChild from './TwowayChild';
import { Typography } from '@mui/material';

const TwowayParent = () => {
  const [text, settext] = useState('');
  const change = (data) => { settext(data) }

  return (
    <div>
      <Typography gutterBottom>Parent:{text}</Typography>
      <TwowayChild change={change} text={text}></TwowayChild>
    </div>
  )
}
export default TwowayParent