//
//	jballands/vespyr
//	FlatButton.js
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import DefaultFont from './utils/DefaultFontStyles';

function getStyles(props) {
	const { accentColor, disabled } = props;

	return {
		base: {
			padding: '5px',
			textTransform: 'uppercase',
			fontSize: '12px',
			userSelect: 'none',
			color: accentColor ? accentColor : '#000000',
			':hover': {
				cursor: disabled ? 'not-allowed' : 'pointer'
			},
		}
	};
}

@Radium
export default class FlatButton extends React.Component {

	static propTypes = {
		accentColor: PropTypes.string,
		disabled: PropTypes.bool
	};

	render() {
		const styles = getStyles(this.props);
		const { children } = this.props;

		return (
			<div style={[DefaultFont, styles.base]}>
				{children}
			</div>
		);
	}

}