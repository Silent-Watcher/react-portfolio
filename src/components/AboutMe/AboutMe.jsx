import './AboutMe.css';

import Title from '../Title/Title';

export default function AboutMe() {
	return (
		<section id="About" className="section">
			<div className="about__section-left">
				<img src="../../../imgs/about.png" alt="avatar2" />
			</div>
			<div className="about__section-right">
				<Title titleText="About Me" subtitle="Who Am I ?" />
				<p className="about__content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Repudiandae aliquid ad provident aut fuga animi soluta quae
					eos non cupiditate voluptates dolorem, doloremque quos dicta
					quibusdam impedit iure nemo a iste culpa! Quasi quibusdam
					hic recusandae delectus velit officiis explicabo
					voluptatibus! Nemo esse similique, voluptates labore
					distinctio, placeat explicabo facilis molestias, blanditiis
					culpa iusto voluptatem ratione eligendi a, quia temporibus
					velit vero ipsa sint ex voluptatum expedita aliquid!
					Debitis, nam!
				</p>
			</div>
		</section>
	);
}
