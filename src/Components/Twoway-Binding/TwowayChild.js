import { TextField, Typography } from '@mui/material';
import React from 'react'

const TwowayChild = ({change,text}) => {


    const valuechange = (event) => {
        const data = event.target.value;
        change(data);
    }

    return (
        <div>
            <Typography gutterBottom>Child:{text}</Typography>
            <TextField variant='outlined'label="TWOWAY" type="text" value={text} onChange={valuechange} />
        </div>
    )
}

export default TwowayChild