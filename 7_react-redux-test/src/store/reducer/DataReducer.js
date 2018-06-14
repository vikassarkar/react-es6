
const initialState = {
    STORE_INITIATE: {},
    SET_DATA: {},
    UPDATE_LIGHTBOX: {}
}

const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_INITIATE':
            return {
                ...state,
                STORE_INITIATE: { data: action.storeInitiate, type: action.type }
            }
            break;
        case 'SET_DATA':
            return {
                ...state,
                SET_DATA: { type: action.type, data: action.data }
            }
            break;
        case 'UPDATE_LIGHTBOX':
            return {
                ...state,
                UPDATE_LIGHTBOX: { type: action.type, data: action.data }
            }
            break;
        default:
            return state || {}
            break;
    }
}

export default DataReducer;
