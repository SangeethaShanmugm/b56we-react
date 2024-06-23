

import React, { useContext } from 'react'
import CounterContext from './CounterContext'

const CounterDisplay = () => {
    const { counter } = useContext(CounterContext)
    console.log(counter)
    return (
        <h1>CounterDisplay- {counter}</h1>
    )
}

export default CounterDisplay