//
//	jballands/vespyr
//	VespyrList.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorUtility, { makeColor } from './utils/ColorUtility';

const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;

	&:hover {
		cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
	}
`;

const Children = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: flex-start;

	.vespyr-list-item + .vespyr-list-item {
		margin-top: 3px;
	}
`;

const Title = styled.div`
	font-size: 10px;
	text-transform: uppercase;
	margin-top: 3px;
	transition: color 250ms ease;
	margin-bottom: 7px;
	color: ${props =>
		props.disabled
			? ColorUtility.disabledGray().string()
			: props.color.string()};
`;

export default class VespyrList extends React.Component {
	static displayName = 'VespyrList';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		children: PropTypes.node,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		disabled: PropTypes.bool,
		onOptionClick: PropTypes.func,
		selected: PropTypes.arrayOf(PropTypes.string).isRequired,
		style: PropTypes.object,
		title: PropTypes.string,
	};

	static defaultProps = {
		color: ColorUtility.black(),
	};

	handleOnClick = id => {
		const { onOptionClick } = this.props;
		onOptionClick && onOptionClick(id);
	};

	render() {
		const {
			accentColor,
			children,
			color,
			disabled,
			selected,
			title,
		} = this.props;

		const cloned = React.Children.map(children, child =>
			React.cloneElement(child, {
				selected: selected.indexOf(child.props.id) > -1,
				onClick: this.handleOnClick,
				accentColor,
				color,
				disabled,
			}),
		);

		return (
			<Container disabled={disabled}>
				{title && (
					<Title color={makeColor(color)} disabled={disabled}>
						{title}
					</Title>
				)}
				<Children>{cloned}</Children>
			</Container>
		);
	}
}
