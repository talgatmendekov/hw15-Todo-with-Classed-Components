import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TodoContextProvider from './store/context'

ReactDOM.render(
	<React.StrictMode>
		<TodoContextProvider>
			<App />
		</TodoContextProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
