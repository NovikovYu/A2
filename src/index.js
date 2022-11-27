import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import App from './components/app/app'
import rootReducer from './redux/rootReducer'

const root = ReactDOM.createRoot(document.getElementById('root'))

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const loggerMiddleware = () => (next) => (action) => {
  const result = next(action)
  return result
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
