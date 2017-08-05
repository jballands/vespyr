import { configure } from '@storybook/react';

function loadStories() {
	require('../stories/BoldButton.jsx');
	require('../stories/FlatButton.jsx');
	require('../stories/TextInput.jsx');
	require('../stories/DropdownMenu.jsx');
}

configure(loadStories, module);