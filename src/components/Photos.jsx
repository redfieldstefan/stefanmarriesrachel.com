import React from 'react';
import Page from './Page';
import '../styles/photos.css';

const context = require.context('../photos/photos', true, /\.(jpg)$/i);
const sources = context.keys().map(filename => {
	return filename.split('./')[1];
}).sort(() => Math.random() - 0.5);

const Photos = () => {
	return (
		<Page className="Photos center-content">
			{
				sources.map(path => <img className="photo" src={require(`../photos/photos/${path}`)} />)
			}
		</Page>
	);
};

export default Photos;