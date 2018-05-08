/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from '../src/TextInput';

class StatefulTextInput extends React.Component {
	state = {
		value: this.props.value ? this.props.value : null,
	};

	update = text => {
		action(`TextInput -> ${text}`)();
		this.setState({ value: text });
	};

	render() {
		let isInvalid = false;
		if (this.props.validateInput) {
			isInvalid = this.state.value !== this.props.validateInput;
		}

		return (
			<TextInput
				{...this.props}
				onUpdate={this.update}
				value={this.state.value}
				invalid={isInvalid}
			/>
		);
	}
}

storiesOf('TextInput', module)
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
	.add('as default', () => (
		<StatefulTextInput title="Name" hint="What's your name?" />
	))
	.add('with style', () => (
		<StatefulTextInput
			title="Name"
			hint="What's your name?"
			style={{ width: 500 }}
		/>
	))
	.add('with icon', () => (
		<StatefulTextInput
			title="Search"
			hint="Look for something..."
			icon={
				<img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-magnifier-2.png" />
			}
		/>
	))
	.add('with value', () => (
		<StatefulTextInput title="Favorite Streamer" value="Brutalmoose" />
	))
	.add('with color', () => (
		<StatefulTextInput
			title="Color"
			hint="Type something..."
			color="#FFA100"
		/>
	))
	.add('with accentColor', () => (
		<StatefulTextInput
			title="Accent Color"
			hint="Click me..."
			accentColor="#F71CFF"
		/>
	))
	.add('with hintColor', () => (
		<StatefulTextInput
			title="Hint Color"
			hint="I'm blue"
			hintColor="#00B7FF"
		/>
	))
	.add('with type', () => (
		<StatefulTextInput
			title="Secret Message"
			hint="Psst!"
			type="password"
		/>
	))
	.add('with lines', () => (
		<StatefulTextInput
			title="Multi-line"
			hint="Type a long sentence..."
			lines={3}
		/>
	))
	.add('with disabled', () => (
		<StatefulTextInput
			title="Disabled"
			hint="I can't take input right now"
			disabled
		/>
	))
	.add('with disabled and color', () => (
		<StatefulTextInput
			title="Disabled"
			hint="I can't take input right now"
			color="#FFA100"
			disabled
		/>
	))
	.add('with validateInput', () => (
		<StatefulTextInput
			title="Name"
			hint="Type 'Brutalmoose'"
			validateInput="Brutalmoose"
		/>
	))
	.add('with validateInput and invalidColor', () => (
		<StatefulTextInput
			title="Name"
			hint="Type 'Lucahjin'"
			validateInput="Lucahjin"
			invalidColor="#b482ff"
		/>
	));
