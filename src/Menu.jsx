//
//	jballands/vespyr
//	Menu.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import ColorUtility from './utils/ColorUtility';
import DefaultFont from './utils/DefaultFontStyles';

function getStyles(props) {
	return {
		base: {
			padding: '5px 10px 10px 10px',
			background: ColorUtility.white(),
		}
	};
}

@Radium
export default class Menu extends React.Component {

	static displayName = 'Menu';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.func,
		title: PropTypes.string,
	};

	renderContent = styles => {
		return this.props.children;
	};

	render() {
		const styles = getStyles(this.props);

		return (
			<div style={[DefaultFont, styles.base]}>
				{this.renderContent(styles)}
			</div>
		);
	}

}