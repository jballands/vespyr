import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownInput from '../src/DropdownInput';

storiesOf('Dropdown', module)
	.add('as default', () => (
		<DropdownInput title="Foobar" value="Brutalmoose" />
	));