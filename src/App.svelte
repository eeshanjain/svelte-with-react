<script>
	import { afterUpdate, onDestroy } from 'svelte';
	import ToggleButton from './components/ToggleButton';
	import ReactDOM from 'react-dom';
	import React from 'react';

	export let name;
	let container;
	const onClick = () => name = name === 'World' ? 'Test Name' : 'World';
	
	$: props = { name, onClick };
	
	/**
	 * It should be noted that we're not creating the React component using onMount() method.
	 * This is because if there are any changes in the props, we want the React component to be updated.
	 * Therefore, we create the component by using the afterUpdate() method.
	*/
	afterUpdate(() => {
		ReactDOM.render(React.createElement(ToggleButton, props), container);
	});
	
	onDestroy(() => {
		ReactDOM.unmountComponentAtNode(container);
	});
</script>

<main>
	<div bind:this={container} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>