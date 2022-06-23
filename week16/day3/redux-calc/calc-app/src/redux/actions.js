export const setNames = (value1, value2) => {
    return{
        type: value1,
        payload: value2
    }
};

// export const changeNameTwo = (value) => {
//     return{
//         type: 'SET_SNAME',
//         payload: value
//     }
// };

export const setResults =(data)=> {
    return{
        type:'RESULT',
        payload: data
    }
};