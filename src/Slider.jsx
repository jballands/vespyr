//
//	jballands/vespyr
//	Slider.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactSlider from 'react-slider';

import ColorUtility, { makeColor } from './utils/ColorUtility';

const Container = styled.div`
	position: relative;
	width: 300px;
	display: flex;
	flex-flow: column nowrap;
`;

// const TrackWithLabelsContainer = styled.div`
// 	display: flex;
// 	flex-flow: row nowrap;
// 	align-items: center;
// `;

// const TrackContainer = styled.div`
// 	position: relative;
// 	width: 100%;
// 	height: 12px;
// `;

const Track = styled.div`
	position: absolute;
	bottom: 6px;
	height: 2px;
	left: 6px;
	width: 100%;
	background: ${props => props.color.string()};
`;

const StyledReactSlider = styled(ReactSlider)`
	width: 100%;
	height: ${props => (props.showValue ? '30px' : 'auto')};
	z-index: 1;

	.handle {
		height: 100%;
	}
`;

// const Title = styled.div`
// 	font-size: 10px;
// 	text-transform: uppercase;
// 	margin-top: 7px;
// 	transition: color 250ms ease;
// 	color: ${props =>
// 		props.disabled
// 			? ColorUtility.disabledGray().string()
// 			: props.color.string()};
// `;

// const Label = styled.div`
// 	font-size: 10px;
// 	color: ${props => props.color.string()};
// `;

// const LeftLabel = Label.extend`margin-right: 7px;`;

// const RightLabel = Label.extend`margin-left: 7px;`;

const HandleContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	position: absolute;
	bottom: 0;
	width: 12px;
	overflow: visible;

	&:hover {
		cursor: pointer;
	}
`;

const Handle = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	border: 1px solid
		${props =>
			props.active ? props.accentColor.string() : props.color.string()};
	background: ${props =>
		props.active ? props.accentColor.string() : 'white'};
	transition: all 250ms ease;
`;

const Value = styled.div`
	transform: ${props => (props.active ? 'scale(1.4)' : 'scale(1)')};
	font-size: 14px;
	color: ${props =>
		props.active ? props.accentColor.string() : props.color.string()};
	transition: all 250ms ease;
	transform-origin: center;
	margin-bottom: 2px;
`;

export default class Slider extends React.Component {
	static displayName = 'Slider';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		defaultValue: PropTypes.number,
		disabled: PropTypes.bool,
		leftLabel: PropTypes.string,
		max: PropTypes.number,
		min: PropTypes.number,
		rightLabel: PropTypes.string,
		showValue: PropTypes.bool,
		style: PropTypes.object,
		title: PropTypes.string,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
		color: ColorUtility.black(),
		disabled: false,
		max: 100,
		min: 0,
		showValue: false,
		defaultValue: 50,
	};

	state = {
		isDragging: false,
		value: this.props.defaultValue,
	};

	handleOnBeforeChange = () => {
		this.setState({
			isDragging: true,
		});
	};

	handleOnChange = value => {
		this.setState({
			value,
		});
	};

	handleOnAfterChange = () => {
		this.setState({
			isDragging: false,
		});
	};

	render() {
		const {
			accentColor,
			className,
			color,
			disabled,
			leftLabel,
			max,
			min,
			rightLabel,
			showValue,
			style,
			title,
		} = this.props;

		const { isDragging, value } = this.state;

		return (
			<Container className={className} style={style}>
				<Track color={makeColor(color)} />
				<StyledReactSlider
					orientation="horizontal"
					onBeforeChange={this.handleOnBeforeChange}
					onChange={this.handleOnChange}
					onAfterChange={this.handleOnAfterChange}
					value={value}
					min={min}
					max={max}
					showValue={showValue}>
					<HandleContainer>
						{showValue && (
							<Value
								accentColor={makeColor(accentColor)}
								active={isDragging}
								color={makeColor(color)}>
								{value}
							</Value>
						)}
						<Handle
							accentColor={makeColor(accentColor)}
							active={isDragging}
							color={makeColor(color)}
						/>
					</HandleContainer>
				</StyledReactSlider>
			</Container>
		);
	}
}
