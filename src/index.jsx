import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const rootElement = document.querySelector('#main-canvas')

const renderApplication = () => ReactDOM.render(<App />, rootElement)

renderApplication()
