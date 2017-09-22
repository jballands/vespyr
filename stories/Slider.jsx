/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Slider from '../src/Slider';

class SmartSlider extends React.Component {
	static defaultProps = {
		defaultValue: 50,
	};

	state = {
		value: this.props.defaultValue,
	};

	onChange = value => {
		this.setState({
			value,
		});
		action(`Slider -> ${value}`)();
	};

	render() {
		return (
			<Slider
				value={this.state.value}
				onChange={this.onChange}
				{...this.props}
			/>
		);
	}
}

storiesOf('Slider', module)
	.addDecorator(story => (
		<div
			style={{
				margin: '20px 5px',
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Roboto", system, "Helvetica", "Arial", san-serif',
				letterSpacing: '1.0px',
			}}>
			{story()}
		</div>
	))
	.add('as default', () => <SmartSlider />)
	.add('with style', () => <SmartSlider style={{ width: 500 }} />)
	.add('with title', () => <SmartSlider title="Intensity" />)
	.add('with labels', () => (
		<SmartSlider leftLabel="Low" rightLabel="High" title="Engagement" />
	))
	.add('with showValue', () => (
		<SmartSlider
			title="Wind Speed"
			leftLabel="Weaker"
			rightLabel="Stronger"
			showValue
			min={45}
			max={160}
			defaultValue={70}
			style={{ width: 400 }}
		/>
	))
	.add('with formatter', () => (
		<SmartSlider
			leftLabel="F"
			rightLabel="A+"
			title="Grade"
			min={60}
			max={100}
			defaultValue={92}
			formatter={value => `${value}%`}
			showValue
		/>
	))
	.add('with color', () => (
		<SmartSlider
			leftLabel="Shallow"
			rightLabel="Deep"
			title="Bass"
			color="#FFA100"
			showValue
		/>
	))
	.add('with accentColor', () => (
		<SmartSlider
			leftLabel="Easy"
			rightLabel="Hard"
			title="Difficulty"
			accentColor="#F71CFF"
			showValue
		/>
	))
	.add('with disabled', () => (
		<SmartSlider
			leftLabel="No"
			rightLabel="Chance"
			title="Disabled"
			disabled
			showValue
		/>
	));
