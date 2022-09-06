// global-style.ts
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
	
	// 폰트import
	@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

	* {
		margin:0;
		padding:0;
		-webkit-text-size-adjust:none;
		word-break:break-all;
		box-sizing:border-box;
	&,
	&:before,
	&:after {
			-webkit-box-sizing:border-box;
			box-sizing: border-box;
		}
	}

	html {
		height: 100%;
		margin: 0;
		padding: 0;
		overflow-y:scroll;
	}

	body {
		-webkit-text-size-adjust: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		touch-action: pan-x pan-y;
	}

	button {
        -webkit-tap-highlight-color : transparent;
	}

	body, 
	div, 
	dl, 
	dt, 
	dd, 
	ul, 
	ol, 
	li, 
	h1, 
	h2, 
	h3, 
	h4, 
	h5, 
	h6, 
	pre, 
	code, 
	form, 
	fieldset, 
	legend,
	p, 
	blockquote, 
	table, 
	th, 
	td, 
	input, 
	select, 
	textarea, 
	button {
		margin:0;
		padding:0;
		word-break:break-all;
	}

	body, input, textarea, select, button, table {
		font-family: Pretendard, AppleGothicNeoSD, 'Apple SD Gothic Neo', 맑은고딕, 'Malgun Gothic', arial, sans-serif;
		font-size:13px; 
		font-weight:500; 
		line-height:18px;
		color:#606060;
	}

	i, 
	em {
		font-style:normal
	}

	fieldset, 
	img {
		border:0 none
	}
	
	img  {
		vertical-align:middle
	}

	video {
		vertical-align:middle
	}

	button {
		border:0 none; 
		border-radius:0; 
		background-color:transparent; 
		cursor:pointer;
		-webkit-appearance: none;
		outline: none;
	}
	
	a {
		color:inherit; 
		text-decoration:none;

		&:active {
				outline: none;
				color: inherit;
		}
	}
	
	article, 
	aside, 
	details, 
	figcaption, 
	figure, 
	footer, 
	header, 
	hgroup, 
	menu, 
	nav, 
	section {
		display:block;
		margin:0;
		padding:0;
	}

	strong {
		font-weight:inherit;
	}

	.blind {
		display:inline-block;
		position:absolute;
		z-index:-10;
		width:0 !important;
		height:0 !important;
		overflow:hidden !important;
		font-size:medium;
		line-height:normal;
		word-break:break-all
	}

	input, 
	select, 
	textarea, 
	button {
		appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
		vertical-align:middle;
		border:none;
	}

	label {
		vertical-align:middle;
	}
	textarea {
		width:100%; 
		border:0; 
		overflow-y:auto; 
		resize:none
	}

	h {

		&1,
		&2,
		&3,
		&4,
		&5,
		&6 {
				margin: 0;
				padding: 0;
				font-weight: normal;
		}
	}

	ul,
	ol,
	dl {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	#root {
		max-width: 750px;
		margin: 0 auto;
	}
`;
