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
	width: 300px;
	display: flex;
	flex-flow: column nowrap;

	&:hover {
		cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
	}
`;

const TrackWithLabelsContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	width: 100%;
	pointer-events: ${props => (props.disabled ? 'none' : 'all')};
`;

const getTitleColor = props => {
	if (props.disabled) {
		return ColorUtility.disabledGray().string();
	} else if (props.active) {
		return props.accentColor.string();
	}
	return props.color.string();
};

const Title = styled.div`
	font-size: 10px;
	text-transform: uppercase;
	margin-top: 7px;
	transition: color 200ms ease;
	color: ${props => getTitleColor(props)};
	user-select: none;
`;

const Label = styled.div`
	font-size: 10px;
	display: flex;
	align-items: flex-end;
	margin-bottom: 2px;
	user-select: none;
	color: ${props =>
		props.disabled
			? ColorUtility.disabledGray().string()
			: props.color.string()};
`;

const LeftLabel = Label.extend`margin-right: 7px;`;

const RightLabel = Label.extend`margin-left: 7px;`;

const TrackContainer = styled.div`
	display: block;
	flex: 1 0;
	position: relative;
`;

const StyledReactSlider = styled(ReactSlider)`
	display: block;
	width: calc(100% - 12px);
	height: ${props => (props.showValue ? '30px' : '100%')};
	z-index: 1;
	position: relative;

	.handle {
		height: 100%;
		outline: none;
	}
`;

const Track = styled.div`
	position: absolute;
	bottom: 6px;
	height: 2px;
	left: 6px;
	width: calc(100% - 12px);
	background: ${props =>
		props.disabled
			? ColorUtility.disabledGray().string()
			: props.color.string()};
`;

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

const getHandleBorderColor = props => {
	if (props.disabled) {
		return ColorUtility.disabledGray().string();
	} else if (props.active) {
		return props.accentColor.string();
	}
	return props.color.string();
};

const getHandleBackgroundColor = props => {
	if (props.disabled) {
		return ColorUtility.disabledGray().string();
	} else if (props.active) {
		return props.accentColor.string();
	}
	return ColorUtility.white().string();
};

const Handle = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	border: 1px solid ${props => getHandleBorderColor(props)};
	background: ${props => getHandleBackgroundColor(props)};
	transition: all 200ms ease;
`;

const getValueColor = props => {
	if (props.disabled) {
		return ColorUtility.disabledGray().string();
	} else if (props.active) {
		return props.accentColor.string();
	}
	return props.color.string();
};

const Value = styled.div`
	transform: ${props => (props.active ? 'scale(1.4)' : 'scale(1)')};
	font-size: 14px;
	color: ${props => getValueColor(props)};
	transition: all 200ms ease;
	transform-origin: center;
	margin-bottom: 2px;
	user-select: none;
`;

export default class Slider extends React.Component {
	static displayName = 'Slider';

	static propTypes = {
		accentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		className: PropTypes.string,
		color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		disabled: PropTypes.bool,
		leftLabel: PropTypes.string,
		max: PropTypes.number,
		min: PropTypes.number,
		onChange: PropTypes.func,
		rightLabel: PropTypes.string,
		showValue: PropTypes.bool,
		style: PropTypes.object,
		value: PropTypes.number,
		title: PropTypes.string,
	};

	static defaultProps = {
		accentColor: ColorUtility.blue(),
		color: ColorUtility.black(),
		disabled: false,
		max: 100,
		min: 0,
		showValue: false,
		value: 50,
	};

	state = {
		isDragging: false,
	};

	handleOnBeforeChange = () => {
		this.setState({
			isDragging: true,
		});
	};

	handleOnChange = value => {
		const { onChange } = this.props;
		onChange && onChange(value);
	};

	handleOnAfterChange = () => {
		this.setState({
			isDragging: false,
		});
	};

	renderTrack = () => {
		const {
			accentColor,
			color,
			disabled,
			max,
			min,
			showValue,
			value,
		} = this.props;

		const { isDragging } = this.state;

		return (
			<TrackContainer>
				<Track color={makeColor(color)} disabled={disabled} />
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
								color={makeColor(color)}
								disabled={disabled}>
								{value}
							</Value>
						)}
						<Handle
							accentColor={makeColor(accentColor)}
							active={isDragging}
							color={makeColor(color)}
							disabled={disabled}
						/>
					</HandleContainer>
				</StyledReactSlider>
			</TrackContainer>
		);
	};

	render() {
		const {
			accentColor,
			className,
			color,
			disabled,
			leftLabel,
			rightLabel,
			style,
			title,
		} = this.props;

		const { isDragging } = this.state;

		return (
			<Container className={className} style={style} disabled={disabled}>
				<TrackWithLabelsContainer disabled={disabled}>
					{leftLabel && (
						<LeftLabel color={makeColor(color)} disabled={disabled}>
							{leftLabel}
						</LeftLabel>
					)}
					{this.renderTrack()}
					{rightLabel && (
						<RightLabel
							color={makeColor(color)}
							disabled={disabled}>
							{rightLabel}
						</RightLabel>
					)}
				</TrackWithLabelsContainer>
				{title && (
					<Title
						accentColor={makeColor(accentColor)}
						active={isDragging}
						color={makeColor(color)}
						disabled={disabled}>
						{title}
					</Title>
				)}
			</Container>
		);
	}
}
