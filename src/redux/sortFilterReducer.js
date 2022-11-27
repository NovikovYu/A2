const initialState = {
  sortFilterMode: 1,
}

const sortFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_CHEAPEST_FILTER':
      return {
        ...state,
        sortFilterMode: 1,
      }

    case 'SWITCH_FASTEST_FILTER':
      return {
        ...state,
        sortFilterMode: 2,
      }

    case 'SWITCH_OPTIMAL_FILTER':
      return {
        ...state,
        sortFilterMode: 3,
      }

    default:
      return state
  }
}

export default sortFilterReducer
