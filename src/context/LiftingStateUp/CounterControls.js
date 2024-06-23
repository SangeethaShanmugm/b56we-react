

import React, { useContext } from 'react'
import CounterContext from './CounterContext'

function CounterControls() {
    const { counter, setCounter } = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}

export default CounterControls