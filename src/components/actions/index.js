export const add = (name, age) => {
    return {
        type: "ADD_DATA",
        payload: {
            name, age
        }
    }
}

export const del = (i) => {
    return {
        type: "DELETE_DATA",
        payload: i
    }
}

export const edit = (i, name, age) => {
    return{
        type: "EDIT_DATA",
        index: i,
        payload: {
            name, age
        }
    }
}