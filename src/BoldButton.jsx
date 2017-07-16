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
import DefaultButton from './utils/DefaultButtonStyles';
import DefaultFont from './utils/DefaultFontStyles';

function getStyles(props) {
	const { accentColor } = props;

	const _accentColor = accentColor ? Color(accentColor) : Color('white');
	const _sideAccentColor = _accentColor.luminosity() > 0.91 ? Color(_accentColor).darken(.10) : Color(_accentColor).darken(.25);
	const _fontColor = _accentColor.luminosity() > 0.75 ? Color('black') : Color('white');

	return {
		container: {
			display: 'block',
			position: 'relative',
			margin: '5px'
		},
		base: {
			padding: '8px',
			position: 'absolute',
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'center',
			background: _accentColor,
			border: `2px solid ${_sideAccentColor}`,
			borderRadius: '5px',
			fontSize: '12px',
			textTransform: 'uppercase',
			transition: 'all ease 0.2s',
			color: _fontColor
		},
    	top: {
			':hover': {
				border: `2px solid ${_sideAccentColor}`,
				transform: 'translate(0, -5px)'
			},
			':active': {
				border: `2px solid ${_sideAccentColor}`,
				transform: 'translate(0, 0)'
			}
		},
		side: {
			position: 'static',
			background: _sideAccentColor,
			left: 0,
			top: 0,
			zIndex: -1
		}
  	};
}

@Radium
class BoldButton extends React.Component {

	static propTypes = {
		accentColor: PropTypes.string
	};

	renderShade = styles => (
		<div style={[DefaultFont, styles.base, styles.side]}>
			{this.props.children}
		</div>
	)

	render () {
		const styles = getStyles(this.props);
		const { children } = this.props;

		return (
			<div style={[DefaultButton, styles.container]}>
				<div style={[DefaultFont, styles.base, styles.top]} key='vespyrButtonTop'>
					{children}
				</div>
				{this.renderShade(styles)}
			</div>
		);
	}

}

export default BoldButton;
