import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/config';

import './Footer.css';

function Footer() {
	const [locations, setLocations] = useState([]);
	const [about, setAbout] = useState([]);
	const [footerRightContent, setFooterRightContent] = useState([]);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getDocs(collection(db, 'locations')).then((snapshot) => {
			let allLocations = snapshot.docs.map(
				(location) => location.data().country
			);
			setLocations(allLocations);
		});
		getDocs(collection(db, 'about')).then((snapshot) => {
			let aboutDetails = snapshot.docs.map(
				(content) => content.data().name
			);
			setAbout(aboutDetails);
		});
		getDocs(
			query(collection(db, 'footerRightContent'), orderBy('id', 'asc'))
		).then((snapshot) => {
			let footerRightContentDetails = snapshot.docs.map(
				(content) => content.data().name
			);
			setFooterRightContent(footerRightContentDetails);
		});
		getDocs(query(collection(db, 'countries'), orderBy('id', 'asc'))).then(
			(snapshot) => {
				let countries = snapshot.docs.map(
					(content) => content.data().name
				);
				setCountries(countries);
			}
		);
	}, []);

	return (
		<div className='footerParentDiv'>
			<div className='content'>
				<div>
					<div className='heading'>
						<p>POPULAR LOCATIONS</p>
					</div>
					<div className='list'>
						<ul>
							{locations.map((location) => (
								<li key={location}>{location}</li>
							))}
						</ul>
					</div>
				</div>
				<div>
					<div className='heading'>
						<p>ABOUT US</p>
					</div>
					<div className='list'>
						<ul>
							{about.map((content) => (
								<li key={content}>{content}</li>
							))}
						</ul>
					</div>
				</div>
				<div>
					<div className='heading'>
						<p>BuyDash</p>
					</div>
					<div className='list'>
						<ul>
							{footerRightContent.map((content) => (
								<li key={content}>{content}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className='footer'>
				<p>
					Other Countries:
					{countries.map((country) => `- ${country} `)}
				</p>
				<p>Free Classifieds in US. © 2006-2022 BuyDash</p>
			</div>
		</div>
	);
}

export default Footer;
