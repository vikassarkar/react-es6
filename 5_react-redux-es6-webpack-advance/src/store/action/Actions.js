import { ActionTypes } from "./ActionTypes"
let nextTodoId = 0;


export const storeInitiate = (storeInitiate) => ({
    type: ActionTypes.STORE_INITIATE,
    storeInitiate:storeInitiate
});

export const setData = (data) => ({
    type: ActionTypes.SET_DATA,
    data:data
});

export const updateLightbox = (data) => ({
    type: ActionTypes.UPDATE_LIGHTBOX,
    data:data
});

export const updateData = (filterType) => ({
    type: ActionTypes.SET_FILTER,
    filterType:filterType
});

export const actionWithoutReactRedux = (data) => ({
    type: ActionTypes.ACTION_WITHOUT_REACT_REDUX,
    data:data
});
