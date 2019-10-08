import React from 'react';

import { ButtonStyle } from './ButtonStyle';

const Button = props => {
	const { onClick } = props;
	return <ButtonStyle onClick={onClick}>add</ButtonStyle>;
};

export default Button;
