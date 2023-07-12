import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import P1 from './pages/pass/pass1.tsx'
import R1 from './pages/reward/rew1.tsx'
import P2 from './pages/pass/pass2.tsx'

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
		path: '/1',
		element: <P1 />,
	},
	{
		path: '/abandonai',
		element: <R1 />, 
	},
	{
		path: '/nnsaykwnu',
		element: <R1 />, 
	},
	{
		path: '/2',
		element: <P2 />,
	},
	{
		path: '/6470',
		element: <P2 />,
	},
])
  
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
