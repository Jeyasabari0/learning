import React, { useEffect, useState } from 'react'

function IntervalFunction() {
    const [count, setCount] = useState(0)

    const change = () => { setCount(count + 1) }

    useEffect(() => {
        console.log('mounted');
        const interval = setInterval(change, 1000)

        return () => {
            console.log('unmounted');
            clearInterval(interval)
        }
    }, [count])
    return (  
        <div>
            {count}
        </div>
    )
}

export default IntervalFunction
