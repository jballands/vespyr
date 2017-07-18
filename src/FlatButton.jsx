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
import ColorUtility from './utils/ColorUtility';

function getColor(accentColor, disabled) {
	if (disabled) {
		return ColorUtility.disabledGray();
	}
	else if (accentColor) {
		return accentColor;
	}
	return ColorUtility.black();
}

function getStyles(props) {
	const { accentColor, disabled } = props;
	const _color = getColor(accentColor, disabled);

	return {
		base: {
			display: 'inline-block',
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

	invokeOnClick = () => {
		const { disabled, onClick } = this.props;
		if (onClick && !disabled) {
			this.props.onClick();
		}
	};

	render() {
		const styles = getStyles(this.props);
		const isHovering = Radium.getState(this.state, 'VespyrFlatButton', ':hover');
		const { children, disabled } = this.props;

		return (
			<div style={styles.base} key='VespyrFlatButton' onClick={this.invokeOnClick}>
				<div style={[DefaultFont, styles.text]}>
					{children}
				</div>
				<div style={[styles.underline, isHovering && !disabled ? styles.underlineHover : null]} />
			</div>
		);
	}

}