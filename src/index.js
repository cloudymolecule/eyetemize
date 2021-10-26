import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './containers/App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]

let store = createStore()

ReactDOM.render(
    <App />,
  document.getElementById('root')
)