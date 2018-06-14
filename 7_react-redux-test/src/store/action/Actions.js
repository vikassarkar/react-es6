import { ActionTypes } from "./ActionTypes"

export const storeInitiate = (storeInitiate) => {
    return {
        type: ActionTypes.STORE_INITIATE,
        storeInitiate: storeInitiate
    }
}

export const setData = (data) => {
    return {
        type: ActionTypes.SET_DATA,
        data: data
    }
}

export const updateLightbox = (data) => {
    return {
        type: ActionTypes.UPDATE_LIGHTBOX,
        data: data
    }
}

export const updateData = (filterType) => {
    return {
        type: ActionTypes.SET_FILTER,
        filterType: filterType
    }
}

