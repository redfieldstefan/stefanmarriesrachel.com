import React from 'react';
import { Link } from "react-router-dom";
import classnames from 'classnames';

const Nav = ({location}) => {
	return (
		<div className="Nav">
			<Link className={classnames("Nav-Header", `location-${location}`)} to="/">
				Stefan marries Rachel
			</Link>
			<ul className="Nav-List">
				<Link className={classnames("Nav-ListItem home", {active: location === ''})} to="/">Home</Link>
				<Link className={classnames("Nav-ListItem rsvp", {active: location === 'rsvp'})} to="/rsvp">RSVP</Link>
				<Link className={classnames("Nav-ListItem schedule", {active: location === 'schedule'})} to="/schedule">Schedule</Link>
				<Link className={classnames("Nav-ListItem faq", {active: location === 'faq'})} to="/faq">Faq</Link>
				<Link className={classnames("Nav-ListItem registry", {active: location === 'registry'})} to="/registry">Registry</Link>
				<Link className={classnames("Nav-ListItem travel", {active: location === 'travel'})} to="/travel">Travel & Hotel</Link>
				<Link className={classnames("Nav-ListItem photos", {active: location === 'photos'})} to="/photos">Photos</Link>
			</ul>
		</div>
	);
};

export default Nav;