import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const inputRef = useRef();

	const onSubmitHandler = () => {
		console.log('onSubmitHandler');
		console.log(inputRef.current.value);
	};
	return (
		<div className='App'>
			<input ref={inputRef} />
			<button onClick={onSubmitHandler}>add</button>
		</div>
	);
}

export default App;
