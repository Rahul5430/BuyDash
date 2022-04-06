import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: 'AIzaSyB6mERRYTzq2b5WcY3MI2nN1UH36gKfsdI',
	authDomain: 'buydash123.firebaseapp.com',
	projectId: 'buydash123',
	storageBucket: 'buydash123.appspot.com',
	messagingSenderId: '610539507210',
	appId: '1:610539507210:web:120851eb939932c421d9f3',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
