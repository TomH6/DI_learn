const initState = {
    count : 0
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case 'ADD':
            return {...state, count: state.count+1}
        case 'SUB':
            return {...state, count: state.count-1}
        default:
            return{...state}
    }
}