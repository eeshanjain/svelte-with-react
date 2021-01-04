<script>
	import { afterUpdate, onDestroy } from 'svelte';
	import ToggleButton from './components/ToggleButton';
	import ReactDOM from 'react-dom';
	import React from 'react';
	import Button from '@spredfast/button/lib/Button';

	export let name;
	let container;
	let sfButtonContainer;
	const onClick = () => name = name === 'World' ? 'Test Name' : 'World';
	
	$: props = { name, onClick };
	
	/**
	 * It should be noted that we're not creating the React component using onMount() method.
	 * This is because if there are any changes in the props, we want the React component to be updated.
	 * Therefore, we create the component by using the afterUpdate() method.
	*/
	afterUpdate(() => {
		ReactDOM.render(React.createElement(ToggleButton, props), container);
		ReactDOM.render(React.createElement(Button, {...props}, 'Test Button'), sfButtonContainer);
	});
	
	onDestroy(() => {
		ReactDOM.unmountComponentAtNode(container);
		ReactDOM.unmountComponentAtNode(sfButtonContainer);
	});
</script>

<main>
	<div bind:this={container} />
	<!-- Currently, we're not able to use the Button JSX tag directly. Need to check if we can find a workaround for this. -->
	<div bind:this={sfButtonContainer} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto; 
	}
</style>