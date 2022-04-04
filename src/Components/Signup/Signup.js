import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Signup.css';
import { useHistory } from 'react-router';
import SignUpLoading from '../Loading/SignUpLoading';

export default function Signup() {
	const history = useHistory();
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [phone, setPhone] = useState('');
	let [password, setPassword] = useState('');
	let [loading, setLoading] = useState(false);
	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		return setTimeout(() => {
			history.push('/login');
		}, 1000);
	};
	return (
		<>
			{loading && <SignUpLoading />}{' '}
			<div>
				<div className='signupParentDiv'>
					<img width='200px' height='200px' src={Logo} alt=''></img>
					<form onSubmit={handleSubmit}>
						<label>Full Name</label>
						<br />
						<input
							className='input'
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							name='name'
						/>
						<br />
						<label>Email</label>
						<br />
						<input
							className='input'
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							name='email'
						/>
						<br />
						<label>Phone</label>
						<br />
						<input
							className='input'
							type='number'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							name='phone'
						/>
						<br />
						<label>Password</label>
						<br />
						<input
							className='input'
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							name='password'
						/>
						<br />
						<br />
						<button>Signup</button>
					</form>
					<Link to='/login'>Login</Link>
				</div>
			</div>
		</>
	);
}
