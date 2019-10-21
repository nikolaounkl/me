import React from "react";
import styled from "styled-components";
import { FaCopyright, FaHeart } from "react-icons/fa";

const Wrapper = styled.footer`
	padding: 3em 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	h5 {
		margin: 0 0.2em;
	}
`;

const Span = styled.span`
	color: ${props => (props.yellow ? "#ffd560" : "#f7f7f7")};
	padding: 0.4em;
`;

const today = new Date();

const year = today.getFullYear();

const Footer = () => {
	return (
		<>
			<Wrapper>
				<h5>
					<Span yellow>
						<FaCopyright />
					</Span>
					{year}
				</h5>
				<h5>
					<Span yellow>|</Span>
				</h5>
				<h5>
					Crafted with a lot of
					<Span yellow>
						<FaHeart />
					</Span>
				</h5>
			</Wrapper>
		</>
	);
};

export default Footer;
