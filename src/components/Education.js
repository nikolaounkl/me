import React from "react";
import styled from "styled-components";
import { FaFileVideo, FaGraduationCap, FaFreeCodeCamp } from "react-icons/fa";

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
	font-family: "Audiowide", cursive;
	font-weight: normal;
	font-size: 0.9em;
`;

const Study = styled.div`
	width: 50%;
`;

const Icon = styled.div`
	color: #ffd560;
	font-size: 1.7em;
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
	justify-content: center;
	text-align: center;
`;

const Education = () => {
	return (
		<Section>
			<h4>
				<Span>Education</Span>
			</h4>

			<br />

			<Text>
				<Study>
					<Icon>
						<FaFreeCodeCamp />
					</Icon>
					<Span white>freeCodeCamp</Span>
				</Study>
			</Text>
			<Text>
				<Study>
					<Icon>
						<FaFileVideo />
					</Icon>
					<Span white>Udemy</Span>
				</Study>
			</Text>
			<Text>
				<Study>
					<Icon>
						<FaFileVideo />
					</Icon>
					<Span white>Laracasts</Span>
				</Study>
			</Text>
			<Text>
				<Study>
					<Icon>
						<FaGraduationCap />
					</Icon>
					<Span white>1st Technical Institut of Athens</Span>
				</Study>
			</Text>
		</Section>
	);
};

export default Education;
