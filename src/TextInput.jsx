//
//	jballands/vespyr
//	TextInput.js
//	
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Color from 'color';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

function getStyles(props) {
	return {
		base: {

		}
	};
}

@Radium
export default class TextInput extends React.Component {

	static propTypes = {
		accentColor: PropTypes.string,
		onUpdate: PropTypes.func,
		value: PropTypes.string,
	};

	render() {
		<div>
			Hello world!
		</div>
	}

}