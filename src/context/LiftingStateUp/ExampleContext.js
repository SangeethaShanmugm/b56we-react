import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";
import { CounterProvider } from "./CounterContext";

function ExampleContext() {

    return (
        <CounterProvider>
            <h1>Counter App</h1>
            <CounterDisplay />
            <CounterControls />
        </CounterProvider>
    );
}

export default ExampleContext;
