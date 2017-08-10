//
//	jballands/vespyr
//	MenuItem.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import ColorUtility from './utils/ColorUtility';

function getStyles(props) {
	return {
		base: {
			padding: '7px 10px 7px 12px',
			':hover': {
				background: ColorUtility.hoverGray(),
			},
		},
	};
}

@Radium
export default class MenuItem extends React.Component {

	static displayName = 'MenuItem';

	static propTypes = {
		children: PropTypes.node,
		onClick: PropTypes.func,
		style: PropTypes.object,
	};

	render() {
		const { children, onClick, style } = this.props;
		const styles = getStyles(this.props);

		return (
			<div style={[styles.base, style]} onClick={onClick}>
				{children}
			</div>
		);
	}

}