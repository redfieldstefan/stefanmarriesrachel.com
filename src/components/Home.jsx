import React from 'react';
import Page from './Page';
import '../styles/home.css'

const Home = (props) => {
	return (
		<Page className="Home">
			<div className="Home-Top-Container">
				<div className="Home-Text">
					<h1>August 1st 2020</h1>
					<p>69146 Barclay Ct</p>
					<p>Sisters Oregon</p>
				</div>
			</div>
		</Page>
	);
};

export default Home;