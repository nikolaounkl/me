import React from "react";
import styled from "styled-components";
import SocialMenu from "./SocialMenu";

const LocationDate = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

const Title = styled.header`
	padding: 3em 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

const Span = styled.span`
	color: ${props => (props.yellow ? "#ffd560" : "#f7f7f7")};
`;

const today = new Date();

const date =
	today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

const Header = () => {
	return (
		<>
			<LocationDate>
				<h6>{date}</h6>
			</LocationDate>
			<Title>
				<h4>
					<Span>Nikolaos Nikolaou</Span>
				</h4>
				<h3>
					<Span yellow>Fullstack Engineer</Span>
				</h3>
				<h5>Berlin, Germany</h5>
				<SocialMenu />
			</Title>
		</>
	);
};

export default Header;
