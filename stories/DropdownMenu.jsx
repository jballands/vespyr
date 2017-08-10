import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownMenu from '../src/DropdownMenu';

storiesOf('DropdownMenu', module)
	.addDecorator(story => (
		<div style={{ margin: '20px 10px' }}>
			{story()}
		</div>
	))
	.add('as default', () => (
		<DropdownMenu title="Creators" value="Brutalmoose" />
	));