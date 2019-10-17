import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Focus from "./Focus";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Languages from "./Languages";
import {} from "react-icons/fa";

const Section = styled.section`
	transition: all 0.1s ease-in-out;
`;

const Content = () => {
	return (
		<Section>
			<Header />
			<Focus />
			<br />
			<br />
			<Skills />
			<br />
			<Experience />
			<br />
			<Education />
			<br />
			<Languages />
			<br />
		</Section>
	);
};

export default Content;
