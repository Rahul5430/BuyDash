import React, { useEffect, useContext } from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../contextStore/AuthContext';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

function Home(props) {
	const { setUser } = useContext(AuthContext);
	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				setUser(user);
			}),
		[setUser]
	);

	return (
		<div className='homeParentDiv'>
			<Header />
			<Banner />
			<Posts />
			<Footer />
		</div>
	);
}

export default Home;
