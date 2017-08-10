//
//	jballands/vespyr
//	AnimatedMenu.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { spring, TransitionMotion } from 'react-motion';

import Menu from './Menu';
import ColorUtility from './utils/ColorUtility';

function getStyles(props, params) {
	return {
		menu: {
			transform: `translateY(${params.y}px)`,
			opacity: params.opacity,
			boxShadow: `0px ${params.shadowDistance}px ${params.shadowSpread}px 0px ${ColorUtility.black().alpha(0.25)}`
		},
	};
}

function springTo(value) {
	return spring(value, { stiffness: 500, damping: 50 });
}

@Radium
export default class AnimatedMenu extends React.Component {

	static displayName = 'AnimatedMenu';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		children: PropTypes.node,
		show: PropTypes.bool,
		style: PropTypes.object,
		title: PropTypes.string,
	};

	static defaultProps = {
		show: false,
	};

	willEnter = () => {
		return {
			y: 6,
			opacity: 0,
			shadowSpread: 0,
			shadowDistance: 0,
		};
	};

	willLeave = () => {
		return {
			y: springTo(6),
			opacity: springTo(0),
			shadowSpread: springTo(0),
			shadowDistance: springTo(0),
		};
	};

	renderMenu = (values, style) => {
		const { accentColor, children, title } = this.props;

		const menuProps = {
			accentColor,
			children,
			title,
		};

		return (
			<div>
				{values.map(config => {
					const styles = getStyles(this.props, config.style);

					return (
						<Menu style={[styles.menu, style]} key={config.key} {...menuProps} />
					);
				})}
			</div>
		);
	};

	render() {
		const { show, style } = this.props;

		const motionStyles = show ? [{
			key: 'vespyr-menu',
			style: {
				y: springTo(0),
				opacity: springTo(1),
				shadowSpread: springTo(5),
				shadowDistance: springTo(3),
			},
		}] : [];

		return (
			<TransitionMotion
				willEnter={this.willEnter}
				willLeave={this.willLeave}
				styles={motionStyles}>
				{ values => this.renderMenu(values, style)}
			</TransitionMotion>
		);
	}

}