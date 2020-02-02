import React from 'react';
import Page from './Page';
import '../styles/Travel.css';

const hotels = [
	{
		name: "Best Western Ponderosa",
		site: 'https://www.bestwestern.com/en_US/book/hotel-details.38103.html?iata=00170260&ssob=PSPBM0304G&cid=PSPBM0304G:google:US+%7C+Properties+%7C+Exact:best+western+ponderosa+lodge&gclid=Cj0KCQiAmZDxBRDIARIsABnkbYRtKxLkw6NmCp8wqbBiWYxqlq6gYvQehYvuMpTYe3fiuxxVPauO8n8aAu1UEALw_wcB&gclsrc=aw.ds',
		phone: "541 549-1234",
		map: 'https://g.page/BWPonderosaLodge?share',
		distance: '5 minutes',
		description: 'Minutes from our wedding site, we have blocked a number of rooms at the Best Western Ponderosa under the Redfield or Hoehn wedding. To reserve a room at the discounted rate call and mention our names!'
	},
	{
		name: "Five Pines Lodge",
		site:'https://fivepinelodge.com/',		
		phone: "541 549-5900",
		map: 'https://goo.gl/maps/xqFdpTAPaJHqGgXV7',
		distance: '5 minutes',
		description: 'Right on the outskirts of town Five Pines Lodge is minutes away from the wedding site, next door to The Three Creeks Brew Pub and Restaurant, and offers cozy cabin lodging. We have not blocked rooms, please call and check for availability.'
	},
	{
		name: "Black Butte Ranch",
		site: 'https://www.blackbutteranch.com/',
		phone: "541 595-1252",
		map: 'https://goo.gl/maps/xFrXXD7K5sm4ghe38',
		distance: '20 minutes',
		description: '20 minutes outside of town, Black Butte Ranch offers vactation rentals and lodging. Though a little farther from the wedding site, Mountain views and family activities make this location worth it!  We have not blocked rooms, please call and check for availability.'
	}
];

const dining = [
	{
		name: "The Open Door",
		description: 'Attached to a fine art gallery, the Open Door serves delicious food and wine in a relaxed (but elegant) atmosphere.',
		link: ''
	},
	{
		name: "Boone Dog's Pizza",
		description: 'Grab a cooked to order woodfire pizzas from this outdoor seating only food cart. Menu rotates regularly based on available ingredients (best Za in town, also good bread)',
		link: ''
	},
	{
		name: "Fika",
		description: 'Very nice espresso/coffee and light breakfast',
		link: ''
	},
	{
		name: "Sisters Bakery",
		description: 'Best donuts you have ever eaten. Try the buttermilk bar ;)',
		link: ''
	},
	{
		name: "Angeline's",
		description: "Bagels, cookies, coffee and pasteries",
		link: ''
	},
	{
		name: "Sister's Smokehouse",
		description: 'Come for the hot sandwiches at this butcher shop, maybe stay a minute to check out the wide selection of meats.',
		link: ''
	},
	{
		name: 'Three Creeks Brew Pub',
		description: "Can't go wrong with pub classics and cold beers brewed on site",
		link: ''
	}
];



const Travel = () => {
	return (
		<Page className="Travel">
			<div className="block">
				<p className="travel-intro">
					We are so excited you are making your way to Central Oregon! Here are some details to help you in your travels as well as some 
					recomendations for things to do while you are in the area (if you are so inclined).
				</p>
			</div>
			<div className="block">
				<h2>Wedding Venue</h2>
				<p>
					Our wedding is going to take place at Stefan's family home in Sisters Oregon. 
					Here is the address and a link to google maps:
				</p>
				<a target="blank" href="https://goo.gl/maps/r1zW1Y2Ab54ipRus7">
						69146 Barclay Ct <br/>
						Sisters, OR, 97759
				</a>
			</div>
			<div className="block">
				<h2>Airport</h2>
				<p>For guests flying from out of town (thank you!) please book your tickets for <a href="https://goo.gl/maps/AwAQJhRGYuuGrvf1A" target="blank">Redmond Municipal Airport</a> (RDM). Redmond is roughly 30 minutes from Sisters and offers a car rental service.</p>
			</div>
			<div className="block">
				<h2>Hotels and Accomodations</h2>
				<p>
					There are many great nearby options to stay while you are in town, we have put together an easy list here for quick reference, as well as some fun locations for activities outside of the wedding!
				</p>
				<ul className="hotels">
					{
						hotels.map(({name, description, site, distance, map, phone}) => (
							<li key={name} className="hotel">
								<a className="hotel-name" target="blank" href={site}>
									<h4>
										{name}
									</h4>
								</a>
								<p><strong>{distance}</strong></p>
								<p>{description}</p>
								<a href={`tel:${phone}`}>{phone}</a>
								<a href={map}>Google Maps</a>
							</li>
						))
					}
				</ul>
			</div>
			<div className="block">
				<h2>Activities and Dining</h2>
				<p>
					We hope everyone can make the most of their weekend in Central Oregon. Here are a few of our favorite spots!
				</p>
				<h3>Outdoor adventures</h3>
				<p>
					For outdoor adventures check out the <a target="blank" href="https://highdesertmuseum.org/">High Desert Museum</a>, <a href="https://goo.gl/maps/Kg8gLQwysZMTmVFZ9" target="blank">Dee Wright Observatory and Lava Fields</a>, the <a target="blank" href="https://goo.gl/maps/jRXS7vbysBfR7wnA9">Wizard Falls Fish Hatchery</a> in Camp Sherman, or <a target="blank" href="https://goo.gl/maps/YAobY6Zkv281AngM9">Suttle Lake</a> for swimming and camping.
				</p>
				<h3>Shopping/City Life</h3>
				<p>
					Bend is only 30 minutes outside of Sisters and has a lot to offer! Visit the <a target="blank" href="https://g.page/oldmilldistrict?share">Old Mill district</a> or Downtown for shopping and dining. We love the McMenamin's <a target="blank" href="https://www.mcmenamins.com/old-st-francis-school/soaking-pool">Old St Francis School</a> for their soaking tubs (this activity may require reservations!).
				</p>
			</div>
			<div className="block">
				<h2>Good places to eat</h2>
				<p>Sisters has no shortage of good spots to grab a bite of food or to sit down for a nice dinner, this is a good short list:</p>
				<ul className="restaurants">
					{
						dining.map(({name, description, link}) => (
							<li key={name} className="restaurant">
								
									<h4>
										{name}
									</h4>
								
								<p>{description}</p>
							</li>
						))
					}
				</ul>
				<p>If you have any questions about things to do don't hesitate to give us a call!</p>
			</div>
		</Page>
	);
};

export default Travel;