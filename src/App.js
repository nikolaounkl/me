import React from "react";
import { createGlobalStyle } from "styled-components";
import About from "./components/About";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        min-width: 100%;
        min-height: 100vh;
        font-family: "Audiowide", cursive;
        font-size: 1rem;
    }
`;

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<About />
		</div>
	);
}

export default App;
