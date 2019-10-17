import React from "react";
import styled from "styled-components";

const Section = styled.section`
	transition: all 0.1s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

const Span = styled.span`
	color: ${props => (props.white ? "#f7f7f7" : "#ffd560")};
	font-weight: normal;
	font-size: 0.9em;
`;

const Text = styled.span`
	color: ${props => (props.white ? "#f7f7f7" : "#ccc")};
	padding: 1em;
	background: rgb(255, 213, 96, 0.2);
	border-radius: 0.2em;
	margin-bottom: 0.2em;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	text-align: center;
`;

const Languages = () => {
	return (
		<Section>
			<h4>
				<Span>Speaking Languages</Span>
			</h4>

			<br />

			<Text>
				<div>
					<h5>Fluent</h5>
					<Span>English</Span>
				</div>
				<div>
					<h5>Intermediate</h5>
					<Span>German</Span>
				</div>
				<div>
					<h5>Native</h5>
					<Span>Greek</Span>
				</div>
			</Text>
		</Section>
	);
};

export default Languages;
