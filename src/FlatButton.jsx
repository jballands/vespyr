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
	const _color = accentColor ? accentColor : '#000000';

	return {
		base: {
			padding: '5px',
			':hover': {
				cursor: disabled ? 'not-allowed' : 'pointer',
			},
		},
		text: {
			textTransform: 'uppercase',
			fontSize: '12px',
			userSelect: 'none',
			color: _color,
		},
		underline: {
			marginTop: '2px',
			display: 'block',
			content: '',
			borderBottom: `solid 1px ${_color}`,
			transform: 'scaleX(0)',
			transition: 'transform 250ms ease'
		},
		underlineHover: {
			transform: 'scaleX(1)'
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
		const isHovering = Radium.getState(this.state, 'VespyrFlatButton', ':hover');
		const { children } = this.props;

		return (
			<div style={styles.base} key='VespyrFlatButton'>
				<div style={[DefaultFont, styles.text]}>
					{children}
				</div>
				<div style={[styles.underline, isHovering ? styles.underlineHover : null]} />
			</div>
		);
	}

}