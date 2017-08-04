//
//	jballands/vespyr
//	CaretDown.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import ColorUtility from '../utils/ColorUtility';

function getStyles() {
	return {
		base: {
			width: '12px',
			height: '12px',
		},
		svg: {
			width: '100%',
			height: '100%',
		},
	};
}

@Radium
export default class CaretDown extends React.Component {

	static displayName = 'CaretDown';

	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		style: PropTypes.object,
	};

	static defaultProps = {
		color: ColorUtility.black(),
	};

	render() {
		const { className, color, style } = this.props;
		const styles = getStyles();

		return (
			<div className={className} style={[styles.base, style]}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styles.svg}>
					<path d="M12 21l-12-18h24z" fill={color} />
				</svg>
			</div>
		);
	}

}