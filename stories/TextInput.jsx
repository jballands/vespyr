import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from '../src/TextInput';

storiesOf('TextInput', module)
	.addDecorator(story => (
		<div style={{ margin: '20px 10px' }}>
			{story()}
		</div>
	))
	.add('as default', () => (
		<TextInput
			title={'Search'}
			hint={'Look for something...'}
			icon={<img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-magnifier-2.png" />}
		/>
	));