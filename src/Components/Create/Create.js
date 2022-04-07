import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext } from '../../contextStore/AuthContext';
import { useHistory } from 'react-router';
import GoLoading from '../Loading/GoLoading';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase/config';

const Create = () => {
	const { user } = useContext(AuthContext);
	const history = useHistory();
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState();
	const [loading, setLoading] = useState(false);
	const handleSubmit = () => {
		setLoading(true);
		let date = new Date().toDateString();
		const storageRef = ref(storage, 'images/' + image.name);
		uploadBytes(storageRef, image).then(({ ref }) => {
			getDownloadURL(ref).then((url) => {
				addDoc(collection(db, "products"), {
					name,
					category,
					price,
					description,
					url,
					userId: user.uid,
					createdAt: date,
				}).then(() => {
					setLoading(false);
					history.push("/");
				});
			});
		});
	};
	return (
		<Fragment>
			<Header />
			{loading && <GoLoading />}
			<div className='centerDiv'>
				<label>Name</label>
				<br />
				<input
					className='input'
					type='text'
					name='Name'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<br />
				<label>Category:</label>
				<select
					name='Category'
					onChange={(e) => {
						setCategory(e.target.value);
					}}
					className='input'
				>
					{' '}
					<option>Select Category</option>
					<option value='Cars'>Cars</option>
					<option value='Cameras & Lenses'>Cameras & Lenses</option>
					<option value='Computers & Laptops'>
						Computers & Laptops
					</option>
					<option value='Mobile Phones'>Mobile Phones</option>
					<option value='Motorcycles'>Motorcycles</option>
					<option value='Tablets'>Tablets</option>
				</select>
				<br />
				<label>Price</label>
				<br />
				<input
					className='input'
					type='number'
					name='Price'
					value={price}
					onChange={(e) => {
						setPrice(e.target.value);
					}}
				/>
				<br />
				<label>Description</label>
				<br />
				<input
					className='input'
					type='text'
					name='Description'
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				/>
				<br />

				<br />
				<img
					alt='Posts'
					width='200px'
					height='200px'
					src={image ? URL.createObjectURL(image) : ''}
				></img>

				<br />
				<input
					type='file'
					onChange={(e) => {
						setImage(e.target.files[0]);
					}}
				/>
				<br />
				<button className='uploadBtn' onClick={handleSubmit}>
					upload and Submit
				</button>
			</div>
		</Fragment>
	);
};

export default Create;
