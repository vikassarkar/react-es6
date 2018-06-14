const DataReducer = (state, action) => {
    switch (action.type) {
        case 'STORE_INITIATE':
            return {
                type: action.type,
                payload: {
                    storeInitiate: action.storeInitiate
                }
            }
            break;
        case 'SET_DATA':
            return {
                type: action.type,
                payload: action.data
            }
            break;
        case 'UPDATE_LIGHTBOX':
            return {
                type: action.type,
                payload: action.data
            }
            break;
        default:
            return { state }
            break;
    }
}

export default DataReducer;
