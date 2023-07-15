import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Esperanca from './pages/esperanca.tsx'

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'

import './index.scss'


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	}, 
	{
		path: '/esperanca',
		element: <Esperanca />,
	},
])
  
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
