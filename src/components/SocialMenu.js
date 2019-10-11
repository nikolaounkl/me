import React from "react";
import {
	FaLinkedin,
	FaGithub,
	FaCodepen,
	FaFileDownload
} from "react-icons/fa";
import styled from "styled-components";

const Menu = styled.div`
	a {
		font-size: 1.4em;
		margin-right: 0.4em;
	}
`;

const SocialMenu = () => {
	return (
		<Menu>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<FaLinkedin />
			</a>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<FaGithub />
			</a>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<FaCodepen />
			</a>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<FaFileDownload />
			</a>
		</Menu>
	);
};

export default SocialMenu;
