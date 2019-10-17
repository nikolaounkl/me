import React from "react";
import { createGlobalStyle } from "styled-components";
import Content from "./components/Content";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        height: 100%;
        font-size: 1em;
        padding: 0.5em;
        font-family: 'Roboto', sans-serif;
        max-width: 720px;
        margin: 0 auto;
        background: #0C0F13;
        color: #ccc;
        line-height: 1.4;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Audiowide", cursive;
		font-weight: normal;
		letter-spacing: 0.2em;
    }
`;

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Content />
		</div>
	);
}

export default App;
