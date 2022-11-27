const initialState = {
  numOfShowingTickets: 5,
  tickets: [],
  loading: false,
  stopAll: false,
}

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TICKETS':
      return {
        ...state,
        numOfShowingTickets: state.numOfShowingTickets + 5,
      }

    case 'LOADING_ON': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'LOADING_OFF': {
      return {
        ...state,
        loading: false,
      }
    }

    case 'LOAD_MORE_TICKETS': {
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets.tickets],
      }
    }

    default:
      return state
  }
}

export default ticketsReducer
