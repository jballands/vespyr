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
		return (
			<TextInput {...this.props} onUpdate={this.update} value={this.state.value} />
		);
	}
};

storiesOf('TextInput', module)
	.addDecorator(story => (
		<div style={{ margin: '20px 10px' }}>
			{story()}
		</div>
	))
	.add('as default', () => (
		<StatefulTextInput
			title="Name"
			hint="What's your name?"
		/>
	))
	.add('with icon', () => (
		<StatefulTextInput
			title="Search"
			hint="Look for something..."
			icon={<img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-magnifier-2.png" />}
		/>
	))
	.add('with default value', () => (
		<StatefulTextInput
			title="Favorite Streamer"
			value="Brutalmoose"
		/>
	))
	.add('with color', () => (
		<StatefulTextInput
			title="Color"
			hint="Type something..."
			color="#FFA100"
		/>
	))
	.add('with accent color', () => (
		<StatefulTextInput
			title="Accent Color"
			hint="Click me..."
			accentColor="#F71CFF"
		/>
	))
	.add('with hint color', () => (
		<StatefulTextInput
			title="Hint Color"
			hint="I'm blue"
			hintColor="#00B7FF"
		/>
	))
	.add('with input type', () => (
		<StatefulTextInput
			title="Secret Message"
			hint="Psst!"
			type="password"
		/>
	));