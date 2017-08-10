import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';

storiesOf('DropdownMenu', module)
	.addDecorator(story => (
		<div style={{ margin: '20px 10px' }}>
			{story()}
		</div>
	))
	.add('as default', () => (
		<DropdownMenu title="Creators" value="Brutalmoose">
			{dismiss => (
				<div>
					<MenuItem onClick={dismiss}>Brutalmoose</MenuItem>
					<MenuItem onClick={dismiss}>Lucahjin</MenuItem>
					<MenuItem onClick={dismiss}>Squirrel</MenuItem>
					<MenuItem onClick={dismiss}>LGR</MenuItem>
				</div>
			)}
		</DropdownMenu>
	));