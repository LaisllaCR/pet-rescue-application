import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	
	* {
		padding: 0;
		margin: 0;
		outline: 0;
		box-sizing: border-box;
	}
	
	html, body, #root {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	body {
		-webkit-font-smoothing: antialiased;
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		min-height: 100vh;
		text-rendering: optimizeLegibility !important;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type=number] {
		-moz-appearance: textfield;
	}

	
`;
