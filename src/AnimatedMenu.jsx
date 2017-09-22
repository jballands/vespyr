//
//	jballands/vespyr
//	AnimatedMenu.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { spring, TransitionMotion } from 'react-motion';
import styled from 'styled-components';

import Menu from './Menu';
import ColorUtility from './utils/ColorUtility';

function springTo(value) {
	return spring(value, { stiffness: 200, damping: 18, precision: 1 });
}

const StyledMenu = styled(Menu).attrs({
	style: props => ({
		transform: `translateY(${props.y}px)`,
		opacity: props.opacity,
		boxShadow: `0px ${props.shadowDistance}px ${props.shadowSpread}px 0px ${ColorUtility.black()
			.alpha(0.25)
			.string()}`,
		...props.passedStyles,
	}),
})``;

export default class AnimatedMenu extends React.Component {
	static displayName = 'AnimatedMenu';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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

	renderMenu = values => {
		const {
			accentColor,
			className,
			children,
			color,
			style,
			title,
		} = this.props;

		const menuProps = {
			passedStyles: style,
			accentColor,
			className,
			children,
			color,
			title,
		};

		return (
			<div>
				{values.map(config => {
					const {
						opacity,
						shadowDistance,
						shadowSpread,
						y,
					} = config.style;

					return (
						<StyledMenu
							opacity={opacity}
							shadowDistance={shadowDistance}
							shadowSpread={shadowSpread}
							y={y}
							key={config.key}
							{...menuProps}
						/>
					);
				})}
			</div>
		);
	};

	render() {
		const { show } = this.props;

		const motionStyles = show
			? [
					{
						key: 'vespyr-menu',
						style: {
							y: springTo(0),
							opacity: springTo(1),
							shadowSpread: springTo(5),
							shadowDistance: springTo(3),
						},
					},
				]
			: [];

		return (
			<TransitionMotion
				willEnter={this.willEnter}
				willLeave={this.willLeave}
				styles={motionStyles}>
				{values => this.renderMenu(values)}
			</TransitionMotion>
		);
	}
}
