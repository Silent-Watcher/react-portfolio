import './AboutMe.css';

import Title from '../Title/Title';

export default function AboutMe() {
	return (
		<section id="About" className="section">
			<div className="about__section-left">
				<img src="" alt="avatar2" />
			</div>
			<div className="about__section-right">
				<Title />
				<p className="about__content"></p>
			</div>
		</section>
	);
}
