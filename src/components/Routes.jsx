import React from 'react';
import classnames from 'classnames';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './Home';
import Photos from './Photos';
import Faq from './Faq';
import Nav from './Nav';
import Travel from './Travel';
import RSVP from './RSVP';

const Routes = (props) => {
	const pathString = props.location.pathname.replace('/', '')
	return (
		<div className={classnames("Body", `location-${pathString}`)}>
			<Nav location={pathString} />
  		<Route exact path="/" component={Home}/>
  		<Route path="/photos" component={Photos}/>
  		<Route path="/faq" component={Faq}/>
  		<Route path="/travel" component={Travel}/>
  		<Route path="/rsvp" component={RSVP}/>
		</div>
	);
};

export default withRouter(Routes);