//
//	jballands/vespyr
//	BoldButton.js
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Color from 'color';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

function calculateAccentColor(accentColor, disabled) {
	if (disabled) {
		if (!accentColor) {
			return ColorUtility.white();
		}
		return ColorUtility.disabledGray();
	}
	if (accentColor) {
		return Color(accentColor);
	}
	return ColorUtility.white();
}

function calculateSideAccentColor(_backgroundColor, disabled) {
	if (disabled) {
		return ColorUtility.disabledGray();
	}

	const luminosity = _backgroundColor.luminosity();

	if (luminosity > 0.91) {
		return _backgroundColor.darken(.07);
	}
	else if (luminosity <= 0.91 && luminosity > 0.74) {
		return _backgroundColor.darken(.30);
	}
	else {
		return _backgroundColor.darken(.25);
	}
}

function calculateFontColor(accentColor, _backgroundColor, disabled) {
	if (disabled) {
		if (!accentColor) {
			return ColorUtility.disabledGray();
		}
		return ColorUtility.white();
	}

	const luminosity = _backgroundColor.luminosity();

	if (luminosity > 0.75) {
		return ColorUtility.black();
	}
	return ColorUtility.white();
}

function getStyles(props) {
	const { accentColor, disabled } = props;

	const _backgroundColor = calculateAccentColor(accentColor, disabled);
	const _sideColor = calculateSideAccentColor(_backgroundColor, disabled);
	const _fontColor = calculateFontColor(accentColor, _backgroundColor, disabled);

	return {
		container: {
			display: 'block',
			position: 'relative',
			margin: '5px',
			cursor: disabled ? 'not-allowed' : 'pointer',
			userSelect: 'none'
		},
		base: {
			padding: '8px',
			position: 'absolute',
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'center',
			background: _backgroundColor,
			border: `2px solid ${_sideColor}`,
			borderRadius: '5px',
			fontSize: '12px',
			textTransform: 'uppercase',
			transition: 'all ease 0.15s',
			color: _fontColor
		},
    	top: {
			':hover': {
				border: `2px solid ${_sideColor}`,
				transform: 'translate(0, -5px)'
			},
			':active': {
				border: `2px solid ${_sideColor}`,
				transform: 'translate(0, 0)'
			}
		},
		side: {
			position: 'static',
			background: _sideColor,
			left: 0,
			top: 0,
			zIndex: -1
		}
  	};
}

@Radium
class BoldButton extends React.Component {

	static propTypes = {
		accentColor: PropTypes.string,
		disabled: PropTypes.bool,
		onClick: PropTypes.func
	};

	invokeOnClick = () => {
		const { disabled, onClick } = this.props;
		if (onClick && !disabled) {
			this.props.onClick();
		}
	};

	renderShade = styles => (
		<div style={[DefaultFont, styles.base, styles.side]}>
			{this.props.children}
		</div>
	)

	render () {
		const styles = getStyles(this.props);
		const { children, disabled } = this.props;

		return (
			<div style={styles.container} onClick={this.invokeOnClick}>
				<div style={[DefaultFont, styles.base, disabled ? null : styles.top]} key='vespyrButtonTop'>
					{children}
				</div>
				{this.renderShade(styles)}
			</div>
		);
	}

}

export default BoldButton;
