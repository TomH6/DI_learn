let initState = {
    fname: '',
    sname: '',
    results: {}
};

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case "SET_FNAME":
            return{...state, fname: action.payload}
        case "SET_SNAME":
            return{...state, sname: action.payload}
        case "RESULT":
            return{...state, results: action.payload}
        default:
            return {...state}
    }    
};