import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeExp } from './expSlice'

function ExpenditureList() {
    const dispatch = useDispatch()

    //useSelector((state)=>state.reducerName.expSliceName)
    //useSelector((state)=>state.expSliceName.stateName)
    const expenditureData = useSelector((state) => state.myExpenditure.expenditure)
    console.log(expenditureData)

    const deleteExp = (id) => {
        dispatch(removeExp(id))
    }
    return (
        <div>ExpenditureList
            {expenditureData.map((item) => (
                <li key={item.id}>Catgeory: {item.category} Price: {item.price}
                    <button onClick={() => deleteExp(item.id)}>Delete</button>
                </li>
            )

            )}
        </div>
    )
}

export default ExpenditureList