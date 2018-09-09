const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'STORE_INITIATE':
            return {
                ...state,
                type:action.type,
                payload: {
                    storeInitiate: action.storeInitiate
                }
            }
        case 'ADD_TODO':
            return {
                ...state,
                type:action.type,
                payload: action.todoInput
            }
        default:
            return {...state}
    }
}

export default TodoReducer;


    //   case 'TOGGLE_TODO':
    //     return state.map(todo =>
    //       (todo.id === action.id) 
    //         ? {...todo, completed: !todo.completed}
    //         : todo
    //     )