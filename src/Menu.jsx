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
			padding: '5px 0 5px 0',
			background: ColorUtility.white(),
			boxShadow: `0px 3px 5px 0px ${ColorUtility.black().alpha(0.25)}`,
			width: 'calc(100% - 20px)',
			zIndex: '1',
		},
		title: {
			fontSize: '10px',
			textTransform: 'uppercase',
			marginTop: '5px',
			marginBottom: '3px',
			marginLeft: '12px',
			transition: 'color 250ms ease',
			color: props.accentColor,
		},
	};
}

@Radium
export default class Menu extends React.Component {

	static displayName = 'Menu';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		style: PropTypes.object,
		title: PropTypes.string,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
	}

	renderContent = styles => {
		const { children, title } = this.props;

		return (
			<div>
				<div style={styles.title}>
					{title}
				</div>
				<div>
					{children}
				</div>
			</div>
		);
	};

	render() {
		const { style } = this.props;
		const styles = getStyles(this.props);

		console.log(style);

		return (
			<div style={[DefaultFont, styles.base, style]}>
				{this.renderContent(styles)}
			</div>
		);
	}

}