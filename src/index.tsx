import * as React from 'react'
import * as serviceWorker from './serviceWorker'
import App from './App'
import ReactDOM from 'react-dom'
import {
  CSSVariables,
  GlobalStyles,
} from '@chadlavi/clear'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <CSSVariables />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
