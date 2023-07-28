import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name: 'result',
    initialState : {
        userId : null,
        result : []
    },
    reducer : {
        setUserId : (state,action) => {
            state.result.push(action.payload)
        },
        pushResultAction : (state,action) => {
            state.result.push(action.payload)
        },
        updateResultAction : (state, action) => {
           const { trace, checked } = action.payload;
           state.result.fill(checked,trace, trace + 1)
        },
        resetResultAction : () => {
            return{
                userId : null,
                result : []
            }
        }

    }
})

export const { setUerId, pushResultAction, resetResultAction} = resultReducer.actions;

export default resultReducer.reducer;

