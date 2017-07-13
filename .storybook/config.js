import { configure } from '@storybook/react';

function loadStories() {
	require('../stories/BoldButton.jsx');
}

configure(loadStories, module);