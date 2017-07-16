import { configure } from '@storybook/react';

function loadStories() {
	require('../stories/BoldButton.jsx');
	require('../stories/FlatButton.jsx');
}

configure(loadStories, module);