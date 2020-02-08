import React from 'react';
import Page from './Page';
import '../styles/faq.css';

const Faq = () => {
	return (
		<Page className="Faq">
			<div className="block">
				<h2>Where is the wedding?</h2>
				<p>
					Our wedding and reception will be held outdoors on Stefan's family's property in Sisters Oregon:
				</p>
				<p>
					<a href="https://goo.gl/maps/AaMkUXqdEDie1siJ7" target="blank">
						69146 Barclay Ct <br />
						Sisters, OR, 97759 <br />
					</a>
				</p>
			</div>
			<div className="block">
				<h2>What time should I arrive?</h2>
				<p>
					Please plan on arriving shortly before 6pm when the ceremony will begin.
				</p>
			</div>
			<div className="block">
				<h2>Is parking available?</h2>
				<p>
					Yes, parking will be available on the property.
				</p>
			</div>
			<div className="block">
				<h2>What should I wear?</h2>
				<p>
					Dressy casual, anything you feel your best in will surely be fine. The ceremony and reception will be outdoors on soft ground - please choose footwear accordingly.
				</p>
			</div>
			<div className="block">
				<h2>When should I rsvp by?</h2>
				<p>
					Please fill out your RSVP <a href="https://forms.gle/zNUL8ky15KhXRtYU8" target="blank">here</a> by no later than July 1st.
				</p>
			</div>
			<div className="block">
				<h2>What if I have a dietary restriction?</h2>
				<p>
					Please let us know when you rsvp, we are happy to accomodate!
				</p>
			</div>
			<div className="block">
				<h2>Will there be dancing?</h2>
				<p>
					Hell yeah there will be.
				</p>
			</div>
			<div className="block">
				<h2>What will the evening look like?</h2>
				<p>
					6:00 - 6:30pm : Ceremony <br />
					6:30 - 7:00 : Cocktail hour, libations and passed apps provided <br />
					7:00 - 8:30 : Dinner <br />
					8:30 onwards : Dancing and festivities! <br />
				</p>
				<p>We intend to celebrate late into the night, if you would like to camp on the property please bring your setup and pack accordingly, guests are welcome to stay the night!</p>
			</div>
		</Page>
	);
};

export default Faq;
