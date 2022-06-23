import {INSERT, UPDATE, DELETE, UPDATE_INDEX} from './actions';
import { addToLocalStorage, getFromLocalStorage } from '../utils/storage';
const initState = {
    currentIndex: -1,
    list: getFromLocalStorage('trxes') 
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case INSERT:
            state.list.push(action.payload);
            addToLocalStorage('trxes', [...state.list]);
            return {...state, list:[...state.list], currentIndex:-1}
        case UPDATE:
            state.list[state.currentIndex] =action.payload;
            addToLocalStorage('trxes', [...state.list]);
            return{...state.list, list:[...state.list], currentIndex:-1}
        case DELETE:
            state.list.splice(action.payload,1);
            addToLocalStorage('trxes', [...state.list]);
            return{...state.list, list:[...state.list], currentIndex:-1}
        case UPDATE_INDEX:
            return{...state, currentIndex: action.payload}
        default:
           return {...state}
    }
}
