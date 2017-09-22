/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
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
			title="Engagement"
			showValue
			min={0}
			max={10000}
			defaultValue={5000}
		/>
	));
