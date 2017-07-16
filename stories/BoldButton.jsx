import React from 'react';
import { storiesOf } from '@storybook/react';
import BoldButton from '../src/BoldButton';

storiesOf('BoldButton', module)
	.add('as default', () => (
		<div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
			<BoldButton>
				Hello world!
			</BoldButton>
			<BoldButton>
				I am a button
			</BoldButton>
			<BoldButton>
				I always take the width of my children
			</BoldButton>
		</div>
	));