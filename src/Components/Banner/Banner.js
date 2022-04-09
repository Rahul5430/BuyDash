import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import DynamicPosts from '../DynamicPosts/DynamicPosts';

import './Banner.css';

function Banner() {
	const [category, setCategory] = useState();
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getDocs(
			query(collection(db, 'categories'), orderBy('name', 'asc'))
		).then((snapshot) => {
			let allCategories = snapshot.docs.map((category) => {
				return category.data().name;
			});
			setCategories(allCategories);
			setLoading(false);
		});
	}, []);

	return (
		<div className='bannerParentDiv'>
			<div className='bannerChildDiv'>
				<div className='menuBar'>
					<div className='categoryMenu'>
						<select
							name='Category'
							onChange={(e) => {
								setCategory(e.target.value);
							}}
						>
							{' '}
							<option value='null'>ALL CATEGORIES</option>
							{categories.map((category) => (
								<option
									value={category}
									key={`option-${category}`}
								>
									{category}
								</option>
							))}
						</select>
					</div>
					{loading ? (
						<div>Loading Categories...</div>
					) : (
						<div className='otherQuickOptions'>
							{categories.map((category) => (
								<span
									onClick={() => setCategory(category)}
									key={category}
								>
									{category}
								</span>
							))}
						</div>
					)}
				</div>
				<div className='banner'>
					<img src='../../../Images/banner copy.png' alt='' />
				</div>
			</div>
			{category != null && <DynamicPosts category={category} />}
		</div>
	);
}

export default Banner;
