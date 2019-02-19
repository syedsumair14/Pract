import { combineReducers } from 'redux';
const initState = {
    Data: [
        {name: 'Sumair', age: '23'}
    ]
};

const reducer = ( state= initState, action) => {
    switch(action.type){
        case "ADD_DATA":
        return {
            ...state,
            Data: [...state.Data, action.payload]
        }
        case "DELETE_DATA":
        let newState = state.Data.splice(action.payload, 1); 
        return {
            ...state,
            newState
        }
        case "EDIT_DATA":
        let f = [...state.Data]
        f.splice(action.index, 1, action.payload)
        return {
            ...state,
            Data: f
        }
        default:
        return state
    }
}

export const rootReducer = combineReducers({reducer})