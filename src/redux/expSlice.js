import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenditure: [],
    isLoading: false,
}

const expSlice = createSlice({
    name: "expenditure",
    initialState,
    reducers: {
        //actions
        addExp: (state, action) => {
            //type => action type, value => payload(value)
            // const newExp = {
            //     ...action.payload, id: Date.now()
            // }
            // state.expenditure.push(newExp)
            state.expenditure.push({ id: Date.now(), ...action.payload })
        },
        removeExp: (state, action) => {
            state.expenditure = state.expenditure.filter((exp) => {
                console.log(exp.id)
                console.log(exp.id === action.payload)
                console.log(exp.id !== action.payload)
                return exp.id !== action.payload
            })
            console.log("Payload id", action.payload)

        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload

        }

    }

})

export const { addExp, removeExp, setIsLoading } = expSlice.actions

export default expSlice.reducer