// import { useRef, useState } from "react"

// export function Ref() {
//     const inputRef = useRef()

//     const handleInputChange = () => {
//         console.log("handleInputChange", inputRef.current.value)
//     }

//     const handleSubmit = () => {
//         console.log("handleSubmit", inputRef.current.value)
//     }
//     return (
//         <div>
//             {/* <h1>Ref Example</h1>
//             <input type="text" ref={inputRef} onChange={handleInputChange} />
//             <button onClick={handleSubmit}>Get Value</button> */}
//             <CardRef />
//         </div>
//     );
// }


// function CardRef() {
//     const [quantity, setQuantity] = useState(1)
//     const quantityRef = useRef(1)

//     const increaseQuantity = () => {
//         const newQuantity = quantityRef.current + 1
//         quantityRef.current = newQuantity
//         setQuantity(newQuantity)
//         console.log(quantityRef.current)
//     }

//     const decreaseQuantity = () => {
//         if (quantityRef.current > 1) {
//             const newQuantity = quantityRef.current - 1
//             quantityRef.current = newQuantity
//             setQuantity(newQuantity)

//         }
//         console.log(quantityRef.current)

//     }

//     return (
//         <div>
//             <p>Quantity: {quantity}</p>
//             <button onClick={increaseQuantity}>Increase</button>
//             {/* <input type="text" ref={quantityRef} /> */}
//             <button onClick={decreaseQuantity}>Decrease</button>
//         </div>
//     )
// }


import React, { useRef, useState } from 'react'

export const Ref = () => {
    const [quantity, setQuantity] = useState(0);
    const quantityRef = useRef(0);


    const handleincrease = () => {
        const newQuant = quantityRef.current + 1;
        quantityRef.current = newQuant;
        setQuantity(newQuant)
    }

    const handledecrease = () => {
        if (quantityRef.current > 0) {
            const newQuant = quantityRef.current - 1;
            quantityRef.current = newQuant;
            setQuantity(newQuant);
        }
    }

    return (
        <>
            <button onClick={handleincrease}>+</button>
            <p>Quantity : {quantity}</p>
            <button onClick={handledecrease}>-</button>
        </>
    )
}


