import { useState, useEffect } from 'react'
import TextInput from './components/inputText'
import './global.scss'


function App() {
	const [phrase, setPhrase] = useState(0)

	const choosePhrase = () => {
		const which = Math.floor(Math.random() * 2)
		setPhrase(which)
	} 

	useEffect (() => {
		choosePhrase()
	},[])


	return (
		<div className='body_main'>

			<div className='content'>
				<div className='text_marc'>para os verdadeiros apreciadores de arte</div>

				<div className='text_marc' style={{marginTop: '0.4vh'}}>
					<TextInput pages={['esperanca']} />
				</div>


				{phrase == 0 ? <div className='text_tip' style={{marginTop: '0.4vh'}}>&quot;deixai, o vos que entrais, toda a _________ !&quot;</div> : null}
				{phrase == 1 ? <div className='text_tip' style={{marginTop: '0.4vh'}}>pace hod</div> : null}

			</div>
		</div>
	)
}

export default App
