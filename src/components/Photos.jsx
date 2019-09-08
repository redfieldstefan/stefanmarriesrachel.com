import React from 'react';
import Page from './Page';
import '../styles/photos.css';

const context = require.context('../photos', true, /\.(jpg)$/i);
const sources = context.keys().map(filename => {
	return filename.split('./')[1];
});

const Photos = () => {
	return (
		<Page className="Photos">
			{
				sources.map(path => <img className="photo" src={require(`../photos/${path}`)} />)
			}
		</Page>
	);
};

export default Photos;