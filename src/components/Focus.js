import React from "react";
import styled from "styled-components";
import {} from "react-icons/fa";

const Section = styled.section`
	transition: all 0.1s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

const Text = styled.p`
	color: ${props => (props.white ? "#f7f7f7" : "#ccc")};
	padding: 0.2em 0;
`;

const Span = styled.span`
	color: ${props => (props.white ? "#f7f7f7" : "#ffd560")};
`;

const Experience = () => {
	return (
		<Section>
			<Text white>
				Expertise: <Span>Frontend Web Development</Span>
			</Text>
			<Text white>
				Comfortable: <Span>Backend Web Development</Span>
			</Text>
			<Text white>
				Current Focus: <Span>React</Span> | <Span>GraphQL</Span> |{" "}
				<Span>Apollo</Span>
			</Text>
		</Section>
	);
};

export default Experience;
