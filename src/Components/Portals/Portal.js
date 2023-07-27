import React, { useState } from 'react'
import Modals from './Modal'
import { Button } from '@mui/material'
import ReactDOM from 'react-dom'

function Portal() {
    const [showModal, setShowModal] = useState(false)
    return ReactDOM.createPortal
    (
        <div >
            <Button variant='contained' onClick={() => setShowModal(true)}>Show modal using a portal</Button>
            {showModal && (<Modals onClose={() => setShowModal(false)} />)}
        </div>,document.getElementById('portal-root')
    )
}

export default Portal
