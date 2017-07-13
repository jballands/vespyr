//
//	jballands/vespyr
//	BoldButton.js
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import Radium from 'radium';
import DefaultButton from './utils/DefaultButtonStyles';
import DefaultFont from './utils/DefaultFontStyles';

function getStyles(props, context) {
	return {
    	base: {
      		padding: '8px',
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'center',
			background: 'white',
			border: '2px solid #EBEBEB',
			borderRadius: '5px',
			display: 'inline-block',
			fontSize: '12px',
			textTransform: 'uppercase'
    	},
  	};
}

@Radium
class BoldButton extends React.Component {

	render () {
		const styles = getStyles(this.props, this.context);

		return (
			<button style={DefaultButton}>
				<div style={[DefaultFont, styles.base]}>
					Hello world
				</div>
			</button>
		);
	}

}

export default BoldButton;
