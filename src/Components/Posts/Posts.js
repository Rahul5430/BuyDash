import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './Post.css';
import BarLoading from '../Loading/BarLoading';
import PostCards from '../PostCards/PostCards';

import { AllPostContext } from '../../contextStore/AllPostContext';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase/config';

function Posts() {
	const { setAllPost } = useContext(AllPostContext);
	const [posts, setPosts] = useState([]); //for showing all posts in Descending order of date
	const [posts2, setPosts2] = useState([]); //for showing all posts in Ascending order of date
	const [loading, setLoading] = useState(false);
	const [loading2, setLoading2] = useState(false);

	useEffect(() => {
		setLoading(true);
		setLoading2(true);
		getDocs(query(collection(db, 'products'), orderBy("createdAt", "desc"))).then((snapshot) => {
			let allPostsDescendingOder = snapshot.docs.map((product) => {
				return {
					...product.data(),
					id: product.id,
				};
			});
			console.log(allPostsDescendingOder);
			setPosts2(allPostsDescendingOder);
			setAllPost(allPostsDescendingOder);
			setLoading(false);
		});
		getDocs(query(collection(db, 'products'), orderBy("createdAt", "asc"))).then((snapshot) => {
			let allPostsAscendingOder = snapshot.docs.map((product) => {
				return {
					...product.data(),
					id: product.id,
				};
			});
			setPosts(allPostsAscendingOder);
			setLoading2(false);
		});
	}, [setAllPost]);
	// quickMenuCards assign all cards of post item later it will be displayed
	let quickMenuCards = posts.map((product, index) => {
		return (
			<div className='quick-menu-cards' key={index}>
				{' '}
				<PostCards product={product} index={index} />{' '}
			</div>
		);
	});

	let freshRecomendationCards = posts2.map((product, index) => {
		if (index < 4) {
			return (
				<div className='fresh-recomendation-card' key={index}>
					{' '}
					<PostCards product={product} index={index} />{' '}
				</div>
			);
		}
		return null;
	});
	return (
		<div className='postParentDiv'>
			{posts && (
				<div className='moreView'>
					<div className='heading'>
						<span>Quick Menu</span>
						<Link to='./viewmore'>
							{' '}
							<span>View more</span>{' '}
						</Link>
					</div>
					<div className='cards'>
						{' '}
						{loading ? <BarLoading /> : quickMenuCards}
					</div>
				</div>
			)}
			<div className='recommendations'>
				<div className='heading'>
					<span>Fresh recommendations</span>
				</div>
				<div className='fresh-recomendation-cards cards'>
					{loading2 ? <BarLoading /> : freshRecomendationCards}
				</div>
			</div>
		</div>
	);
}

export default Posts;
