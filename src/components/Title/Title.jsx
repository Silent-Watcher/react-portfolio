import './Title.css';

import propType from 'prop-types';

export default function Title({ titleText, subtitle }) {
	return (
		<>
			<p className="section-subtitle">{subtitle}</p>
			<h2 className="section-title">{titleText}</h2>
		</>
	);
}

Title.propTypes = {
	titleText: propType.string.isRequired,
	subtitle: propType.string.isRequired,
};

Title.defaultProps = {
	titleText: 'Title',
	subtitle: 'Sub title',
};
