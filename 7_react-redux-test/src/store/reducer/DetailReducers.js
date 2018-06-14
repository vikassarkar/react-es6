const DetailReducers = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return Object.assign({}, state, {
                type: action.type,
                payload: action.data
            })
        default:
            return {}
    }
}

export default DetailReducers;
