import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../global.scss'

interface inputProps {
	pages: Array<string>;
}

function TextInput(props: inputProps) {
	const [text, setText] = useState('')
	const [width, setWidth] = useState(20)
	const navigate = useNavigate()
    
	const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value.toLowerCase().trim().replace('ç', 'c')
		if(newValue.length <= 20){
			setText(newValue)
			setWidth(20 + event.target.value.length*12)
		}
	}
    
	const goPage = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			if(props.pages.includes(text)){
				navigate(text)
			} else {
				navigate('/lost')
			}
		}
	}

	return(
		<input onKeyDown={goPage} onChange={textChange} autoFocus style={{ width }} value={text} />
	)
}

export default TextInput


