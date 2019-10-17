import React from "react";
import {
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaReact,
	FaSass,
	FaPhp,
	FaLaravel,
	FaChrome,
	FaAws,
	FaNpm,
	FaGit,
	FaWordpress,
	FaElementor
} from "react-icons/fa";
import {
	DiJqueryLogo,
	DiMysql,
	DiVisualstudio,
	DiFirebase,
	DiBootstrap,
	DiScrum
} from "react-icons/di";
import styled from "styled-components";

const Section = styled.section`
	transition: all 0.1s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 1em;
	margin-bottom: 0.2em;
	align-items: center;
	justify-content: space-between;
	background: rgb(255, 213, 96, 0.2);
	border-radius: 0.2em;
`;

const IconDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Icon = styled.div`
	font-size: ${props => (props.skill ? "1em" : "1.7em")};
	padding: 0 0.2em;
	color: #ffd560;
	transition: all 0.2s ease-in-out;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Span = styled.span`
	color: ${props => (props.white ? "#f7f7f7" : "#ffd560")};
`;

const Skills = () => {
	return (
		<Section>
			<h4>
				<Span>Skills</Span>
			</h4>
			<br />
			<Container>
				<h5>HTML</h5>
				<IconDiv>
					<Icon title="HTML5">
						<FaHtml5 />
					</Icon>
					<Icon title="JSX">
						<FaReact />
					</Icon>
				</IconDiv>
			</Container>

			<Container>
				<h5>CSS</h5>
				<IconDiv>
					<Icon title="CSS3">
						<FaCss3Alt />
					</Icon>
					<Icon title="Sass">
						<FaSass />
					</Icon>
					<Icon title="Bootstrap 4">
						<DiBootstrap />
					</Icon>
					<Icon skill>BULMA</Icon>
				</IconDiv>
			</Container>

			<Container>
				<h5>Javascript</h5>
				<IconDiv>
					<Icon title="Javascript">
						<FaJsSquare />
					</Icon>
					<Icon title="React">
						<FaReact />
					</Icon>
					<Icon title="jQuery">
						<DiJqueryLogo />
					</Icon>
				</IconDiv>
			</Container>

			<Container>
				<h5>Backend</h5>
				<IconDiv>
					<Icon title="PHP">
						<FaPhp />
					</Icon>
					<Icon title="Laravel ^7.4">
						<FaLaravel />
					</Icon>
					<Icon title="MySQL">
						<DiMysql />
					</Icon>
					<Icon skill>GraphQL</Icon>
				</IconDiv>
			</Container>

			<Container>
				<h5>Cloud Services</h5>
				<IconDiv>
					<Icon title="Amazon Web Services">
						<FaAws />
					</Icon>
					<Icon title="Firebase">
						<DiFirebase />
					</Icon>
				</IconDiv>
			</Container>

			<Container>
				<h5>Tools</h5>
				<IconDiv>
					<Icon title="npm">
						<FaNpm />
					</Icon>
					<Icon title="Visual Studio Code">
						<DiVisualstudio />
					</Icon>
					<Icon title="Git">
						<FaGit />
					</Icon>
					<Icon title="Chrome Developer tools">
						<FaChrome />
					</Icon>
				</IconDiv>
			</Container>

			<Container>
				<h5>Software Development</h5>
				<IconDiv>
					<Icon title="Scrum">
						<DiScrum />
					</Icon>
					<Icon skill>Kanban</Icon>
				</IconDiv>
			</Container>

			<Container>
				<h5>CMS</h5>
				<IconDiv>
					<Icon title="Wordpress">
						<FaWordpress />
					</Icon>

					<Icon title="Elementor">
						<FaElementor />
					</Icon>
				</IconDiv>
			</Container>
		</Section>
	);
};

export default Skills;
