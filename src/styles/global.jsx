import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 	:root {
 		--light-200: #F5F5F5;
 		--dark-200: #949494;
 		--dark-300: #7D7D7D;
 		--dark-400: #666666;
 		--dark-500: #4F4F4F;
 		--dark-600: #383838;
 		--dark-700: #212121;
 		--dark-800: #232d41;

 		--pink-100: rgba(255, 100, 127, 0.7);
 		--pink-200: #b300b3;
 		--pink-300: #FF92A5;
 		--pink-400: #FF647F;
 		--pink-500: #FF3659;
 		--pink-600: #FF0833;
 		--pink-700: #D90026;
 		--pink-800: #AC001E;

 		--off-white: rgba(255, 255, 255, 0.8);
 		--navy-400:  rgba(47, 56, 78, 1);

 	}

 	* {
 		margin: 0;
 		padding: 0;
 		outline: 0;
    	box-sizing: border-box
 	}

  	body {
    	color: var(--dark-200);
    	background-color: var(--dark-800); 
    	font-family: monospace;
    	line-height: 1;
  	}

`;