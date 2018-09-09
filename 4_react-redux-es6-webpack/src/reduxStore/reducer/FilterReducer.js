const FilterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        type: action.type,
        payload: {
          filterType: action.filterType
        }
      }
    default:
      return { ...state }
  }
}

export default FilterReducer