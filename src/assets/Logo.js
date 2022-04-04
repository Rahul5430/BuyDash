import React from 'react';
import logo from './logo-rectangle.png';

export default function Logo() {
	return (
		<img
			src={logo}
			alt='logo'
			style={{ height: '30px', width: 'auto', borderRadius: '2px' }}
		/>
	);
}
