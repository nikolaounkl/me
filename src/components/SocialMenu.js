import React from "react";
import { FaLinkedin, FaGithub, FaCodepen, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const Menu = styled.div`
	padding: 0.4em 0;

	a {
		font-size: 1.2em;
		margin-right: 0.4em;
		color: #f7f7f7;
		transition: all 0.2s ease-in-out;

		&:hover {
			color: #ffd560;
		}
	}
`;

const SocialMenu = () => {
	return (
		<Menu>
			<a
				href="https://www.linkedin.com/in/nikolaos-nikolaou-585407127/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedin />
			</a>
			<a
				href="https://github.com/nikolaounkl"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithub />
			</a>
			<a
				href="https://codepen.io/nikolaounkl/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaCodepen />
			</a>
			<a
				href="https://mail.google.com/mail/?view=cm&fs=1&to=nikos.nikolaou.dev@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaEnvelope />
			</a>
		</Menu>
	);
};

export default SocialMenu;
