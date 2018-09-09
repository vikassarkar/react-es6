import { createAction } from "redux-actions";
import { ActionTypes } from "./ActionTypes"

export const setInitializing = (storeInitiate) => ({
    type: "SET_INITILIZING",
    status:storeInitiate
})

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