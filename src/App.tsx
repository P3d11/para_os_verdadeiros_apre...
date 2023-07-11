import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.scss'


function App() {
	const howMany = 2
	const navigate = useNavigate()
	let page = 0

	const whichPage = () => {
		page = Math.floor(Math.random() * howMany) + 1
	}

	useEffect(() => {
		whichPage()
		navigate('/' + page)
	}, [])

	return (
		<></>
	)
}

export default App
