import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './global.scss'


function App() {
	const [text, setText] = useState('')
	const [width, setWidth] = useState(20)
	const [phrase, setPhrase] = useState([0, 0, 0, 0])
	const navigate = useNavigate()
	const pages = ['primeiro', 'abandonai', 'segundo', 'terceiro', 'quarto']

	const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value.toLowerCase().trim()
		if(newValue.length <= 20){
			setText(newValue)
			setWidth(20 + event.target.value.length*12)
		}
	}

	const goPage = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			if(pages.includes(text)){
				navigate(text)
			} else {
				navigate('/lost')
			}
		}
	}

	const choosePhrase = () => {
		const which = Math.floor(Math.random() * 4) + 1
		setPhrase([which == 1 ? 1 : 0, which == 2 ? 1 : 0, which == 3 ? 1 : 0, which == 4 ? 1 : 0])
	} 

	useEffect (() => {
		choosePhrase()
	},[])


	return (
		<div className='body_main'>
			<div className='content'>
				<div className='text_marc'>para os verdadeiros apreciadores de arte</div>
				<div className='text_marc' style={{marginTop: '0.3vh'}}>
					<input onKeyDown={goPage} onChange={textChange} autoFocus style={{ width }} value={text} />
				</div>
				{phrase[0] ? <div className='text_tip'>nao tenha medo de dar o <div className='text_tip important'>primeiro</div> passo</div> : null}
				{phrase[1] ? <div className='text_tip'>nao tenha medo de dar o <div className='text_tip important'>2</div> passo</div> : null}
				{phrase[2] ? <div className='text_tip'>nao tenha medo de dar o <div className='text_tip important'>3</div> passo</div> : null}
				{phrase[3] ? <div className='text_tip'>nao tenha medo de dar o <div className='text_tip important'>4</div> passo</div> : null}
			</div>
		</div>
	)
}

export default App
