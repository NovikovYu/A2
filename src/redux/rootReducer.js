import { combineReducers } from 'redux'

import sortFilterReducer from './sortFilterReducer'
import stopFilterReducer from './stopsFilterReducer'
import ticketsReducer from './ticketsReducer'

const rootReducer = combineReducers({
  sort: sortFilterReducer,
  stop: stopFilterReducer,
  tickets: ticketsReducer,
})

export default rootReducer
