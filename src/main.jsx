import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.postcss'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { store } from './state/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </NextUIProvider>
)
