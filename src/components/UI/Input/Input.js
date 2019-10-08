import React from 'react';

import { InputStyle } from './InputStyle';

const Input = props => {
	const { nameRef } = props;
	return <InputStyle ref={nameRef} />;
};

export default Input;
