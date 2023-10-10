import './Navbar.css';

export default function Navbar() {
	return (
		<nav>
			<div className="logo">LOGO</div>
			<ul>
				<li>
					<a href="#Home">Home</a>
				</li>
				<li>
					<a href="#About">About</a>
				</li>
				<li>
					<a href="#Portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#Blog">Blog</a>
				</li>
				<li>
					<a href="#Testimonial">Testimonial</a>
				</li>
				<li>
					<a href="#Contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
