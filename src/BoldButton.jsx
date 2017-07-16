//
//	jballands/vespyr
//	BoldButton.js
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import Radium from 'radium';
import Color from 'color';
import DefaultButton from './utils/DefaultButtonStyles';
import DefaultFont from './utils/DefaultFontStyles';

function getStyles() {
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
			background: 'white',
			border: '2px solid #EBEBEB',
			borderRadius: '5px',
			fontSize: '12px',
			textTransform: 'uppercase',
			transition: 'all ease 0.2s',
		},
    	top: {
			':hover': {
				border: '2px solid #EBEBEB',
				transform: 'translate(0, -5px)'
			},
			':active': {
				border: '2px solid #EBEBEB',
				transform: 'translate(0, 0)'
			}
		},
		side: {
			position: 'static',
			background: '#EBEBEB',
			left: 0,
			top: 0,
			zIndex: -1
		}
  	};
}

@Radium
class BoldButton extends React.Component {

	renderShade = styles => (
		<div style={[DefaultFont, styles.base, styles.side]}>
			{this.props.children}
		</div>
	)

	render () {
		const styles = getStyles();
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
