import React, { useEffect, useState } from 'react'

function Mouse() {
    const [point, setPoint] = useState({ x: 0, y: 0 })

    function move(e) {
        console.log('updating');
        setPoint({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        console.log('mounted');
        window.addEventListener('pointermove', move)
        return () => {
            console.log('unmounted');
         window.removeEventListener('pointermove', move) }
    }, [])

    return (
        <div>
        <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            opacity: 0.7,
            transform: `translate(${point.x}px, ${point.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40
        }}>
        </div>
        USE EFFECT = X-{point.x},Y-{point.y}</div>
    )
}

export default Mouse
