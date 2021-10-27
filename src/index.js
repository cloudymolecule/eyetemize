import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './containers/App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import combineReducers from './reducers/index'

const middleware = [thunk]

let store = createStore(combineReducers, composeWithDevTools(
  applyMiddleware(...middleware)
))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
)