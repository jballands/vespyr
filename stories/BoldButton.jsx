import React from 'react';
import { storiesOf } from '@storybook/react';
import BoldButton from '../src/BoldButton';

storiesOf('BoldButton', module)
	.add('as default', () => (
		<BoldButton />
	));