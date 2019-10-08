import React, { useRef } from 'react';
import './App.css';
import Input from './components/UI/Input/Input';
import Button from './components/UI/Button/Button';

function App() {
	const inputRef = useRef();

	const onSubmitHandler = () => {
		console.log('onSubmitHandler');
		console.log(inputRef.current.value);
	};
	return (
		<div className='App'>
			<Input nameRef={inputRef} />
			<Button onClick={onSubmitHandler}>add</Button>
		</div>
	);
}

export default App;
