import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownList from '../src/DropdownList';

storiesOf('DropdownList', module)
	.add('as default', () => (
		<DropdownList title="Foobar" />
	));