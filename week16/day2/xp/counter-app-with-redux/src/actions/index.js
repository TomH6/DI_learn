export const plusOne = (value) => {
    return{
        type: 'INCREASE_COUNT',
        payload: value 
    }
};

export const minusOne = (value) => {
    return{
        type: 'DECREASE_COUNT',
        payload: value
    }
};