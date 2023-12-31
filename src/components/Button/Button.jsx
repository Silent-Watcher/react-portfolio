import './Button.css';

import PropTypes from 'prop-types';

export default function Button({ link, name }) {
	return (
		<a className="btn" href={link}>
			{name}
		</a>
	);
}

Button.propTypes = {
	link: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
