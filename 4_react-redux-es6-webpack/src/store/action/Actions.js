import { ActionTypes } from "./ActionTypes"
let nextTodoId = 0;


export const storeInitiate = (storeInitiate) => ({
    type: ActionTypes.STORE_INITIATE,
    storeInitiate:storeInitiate
});

export const actionWithoutReactRedux = (data) => ({
    type: ActionTypes.ACTION_WITHOUT_REACT_REDUX,
    data:data
});
