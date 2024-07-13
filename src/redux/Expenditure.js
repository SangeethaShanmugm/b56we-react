import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExp, setIsLoading } from './expSlice'

function Expenditure() {
    const newCategoryRef = useRef(null)
    const priceRef = useRef(null)
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.myExpenditure.isLoading)
    console.log(isLoading)




    const handleClick = () => {
        const newCategory = newCategoryRef.current.value;
        const newPrice = priceRef.current.value

        dispatch(setIsLoading(true))
        console.log(isLoading)


        console.log(newCategory, newPrice)
        // const newExp = {
        //     category: newCategory,
        //     price: newPrice
        // }
        // console.log(newExp)

        dispatch(addExp({ category: newCategory, price: newPrice }))

        newCategoryRef.current.value = ""
        priceRef.current.value = ""
        dispatch(setIsLoading(false))
        console.log(isLoading)
    }
    return (
        <div>
            <input type="text" placeholder="Enter Expenses" ref={newCategoryRef} />
            <input type="number" placeholder="Enter price" ref={priceRef} />
            <button onClick={handleClick} disabled={isLoading}>Add Expenses</button>
            {isLoading && <p>Loading...</p>}
        </div>
    )
}

export default Expenditure