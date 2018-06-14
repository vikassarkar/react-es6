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
        default:
            return { state }
            break;
    }
}

export default DataReducer;
