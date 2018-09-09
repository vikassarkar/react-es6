import { ActionTypes } from "./ActionTypes"
let nextTodoId = 0;


export const storeInitiate = (storeInitiate) => ({
    type: ActionTypes.STORE_INITIATE,
    storeInitiate:storeInitiate
})

export const addTodo = (todoInput) => ({
    type: ActionTypes.ADD_TODO,
    todoInput:todoInput
})

export const setFilter = (filterType) => ({
    type: ActionTypes.SET_FILTER,
    filterType:filterType
})

// export const toggleTodo = (id: any) => ({
//     type: ActionTypes.TOGGLE_TODO,
//     id
// })
