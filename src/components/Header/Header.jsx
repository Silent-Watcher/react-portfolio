import './Header.css';

import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';

export default function Header() {
	return (
		<header>
			<div className="header__overlay"></div>
			<Navbar />
			<div className="header__intro">
				<div className="header__intro_left">
					<p>HI !</p>
					<h1>I am John Doe</h1>
					<p>FRONTEND WEB DESIGNER</p>
					<Button name="Download CV" link="#" />
				</div>
				<div className="header__intro_right">
					<img
						className="avatar"
						src="imgs/atanavatar.png"
						alt="avatar"
					/>
				</div>
			</div>
		</header>
	);
}
