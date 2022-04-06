import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './Post.css';
import BarLoading from '../Loading/BarLoading';
import PostCards from '../PostCards/PostCards';

import { data } from '../../data';
import { AllPostContext } from '../../contextStore/AllPostContext';

function Posts() {
	const { setAllPost } = useContext(AllPostContext);
	const [posts, setPosts] = useState([]); //for showing all posts in Descending order of date
	const [posts2, setPosts2] = useState([]); //for showing all posts in Ascending order of date
	const [loading, setLoading] = useState(false);
	const [loading2, setLoading2] = useState(false);
	useEffect(() => {
		setLoading(true);
		setLoading2(true);
		setPosts2(data);
		setAllPost(data);
		setLoading(false);
		setPosts(data.slice().reverse());
		setLoading2(false);
		console.log(data);
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
