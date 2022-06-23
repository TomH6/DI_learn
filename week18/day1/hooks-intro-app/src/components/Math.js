import React, {useReducer} from 'react';

const initialState = {
    calc: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'addition':
            return {...state, calc: state.calc+1}
        case 'subtraction':
            return {...state, calc: state.calc-1}
        case 'multiply':
            return {...state, calc: state.calc*2}
        case 'divide':
            return {...state, calc: state.calc/2}
        default:
            return {...state}
    }
}
const Math = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
            <h2>Simple Calculator</h2>
            Result: {state.calc}
            <button onClick={()=>dispatch({type:'addition'})}>+1</button>
            <button onClick={()=>dispatch({type:'subtraction'})}>-1</button>
            <button onClick={()=>dispatch({type:'multiply'})}>*2</button>
            <button onClick={()=>dispatch({type:'divide'})}>/2</button>
        </>
        
    )
}
export default Math;