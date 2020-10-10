import React from "react";
import styled from "styled-components";
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
  FaYarn,
  FaGhost,
  FaEmber,
  FaWordpress,
  FaElementor,
} from "react-icons/fa";
import {
  DiJqueryLogo,
  DiMysql,
  DiVisualstudio,
  DiFirebase,
  DiBootstrap,
  DiScrum,
  DiJira,
} from "react-icons/di";

const Section = styled.section`
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Span = styled.span`
  color: ${(props) => (props.white ? "#f7f7f7" : "#ffd560")};
  font-family: "Audiowide", cursive;
  font-weight: normal;
  font-size: 0.9em;
`;

const Icons = styled.div`
  color: #ffd560;
  font-size: 1.2em;
  margin-top: 0.2em;
`;

const Text = styled.span`
  color: ${(props) => (props.white ? "#f7f7f7" : "#ccc")};
  padding: 1em;
  background: rgb(255, 213, 96, 0.2);
  border-radius: 0.2em;
  margin-bottom: 0.2em;
  width: 100%;

  a {
    color: #ffd560;
    transition: all 0.2s ease-in-out;
    font-family: "Audiowide", cursive;
    font-weight: normal;
    font-size: 0.9em;
  }
`;

const Experience = () => {
  return (
    <Section>
      <h4>
        <Span>Experience</Span>
      </h4>

      <br />
      <Text>
        <h6>DECEMBER 2019 - present</h6>
        <a
          href="https://www.plinga.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          AMBOSS GmbH
        </a>{" "}
        — <Span white>Fullstack Engineer</Span>
        <br />
        Fullstack web development in an agile environment using Scrum{" "}
        <Span>-</Span> Developing company's marketing platform <Span>-</Span>{" "}
        Refactoring / restyling of landing pages
        <br />
        <Span white>Tech stack</Span>
        <Icons>
          <FaReact /> <FaHtml5 /> <FaCss3Alt /> <FaSass /> <FaJsSquare />{" "}
          <FaGhost />
          <FaEmber /> <FaAws /> <FaYarn /> <FaGit /> <DiScrum />{" "}
          <DiVisualstudio /> <FaChrome />
        </Icons>
      </Text>

      <Text>
        <h6>MAY 2017 - NOVEMBER 2019</h6>
        <a
          href="https://www.plinga.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Plinga GmbH
        </a>{" "}
        — <Span white>Fullstack Web Developer</Span>
        <br />
        Fullstack web development in an agile environment using Scrum{" "}
        <Span>-</Span> Maintaining, debugging and developing company's APIs &
        platform <Span>-</Span> Integration of external APIs <Span>-</Span>{" "}
        Integration of advertisement providers <Span>-</Span> Refactoring /
        restyling of login / register and campaigns pages <Span>-</Span> Sendy +
        SeS integration for marketing email campaigns and responsive email
        templates <Span>-</Span> Built a new social gaming platform{" "}
        <Span>-</Span> Refactoring / restyling of corporate page
        <br />
        <Span white>Tech stack</Span>
        <Icons>
          <FaHtml5 /> <FaCss3Alt /> <FaJsSquare /> <FaPhp /> <FaLaravel />{" "}
          <DiJqueryLogo /> <FaAws /> <DiBootstrap /> <DiMysql /> <FaGit />{" "}
          <DiScrum /> <DiVisualstudio /> <FaChrome />
        </Icons>
      </Text>

      <Text>
        <h6>June 2016 - present</h6>
        <Span>Freelancer</Span>— <Span white>Fullstack Web Developer</Span>
        <br />
        Landing pages <Span>-</Span> Corporate websites <Span>-</Span>{" "}
        E-commerce shops <Span>-</Span> Portfolios
        <br />
        <Span white>Tech stack:</Span>
        <Icons>
          <FaHtml5 /> <FaCss3Alt /> <FaJsSquare /> <FaReact /> <DiJqueryLogo />{" "}
          <FaSass /> <DiBootstrap /> <DiFirebase /> <FaGit /> <FaWordpress />{" "}
          <FaElementor /> <FaNpm /> <DiVisualstudio /> <FaChrome />
        </Icons>
      </Text>

      <Text>
        <h6>MAY 2017 - JULY 2017</h6>
        <a
          href="https://www.store2be.com/en/start/"
          rel="noopener noreferrer"
          target="_blank"
        >
          store2be GmbH
        </a>{" "}
        — <Span white>Frontend Web Developer</Span>
        <br />
        Creation of marketing contact forms <Span>-</Span> Development of
        platform’s dashboard
        <br />
        <Span white>Tech stack:</Span>
        <Icons>
          <FaHtml5 /> <FaCss3Alt /> <FaJsSquare /> <FaReact /> <DiScrum />{" "}
          <DiJira /> <FaNpm /> <DiVisualstudio /> <FaChrome />
        </Icons>
      </Text>

      <Text>
        <h6>FEBRUARY 2017 - APRIL 2017</h6>
        <a href="https://kiron.ngo/" rel="noopener noreferrer" target="_blank">
          Kiron - Open Higher Education
        </a>{" "}
        — <Span white>Frontend Web Developer</Span>
        <br />
        Development of organisation's website
        <br />
        <Span white>Tech stack:</Span>
        <Icons>
          <FaHtml5 /> <FaCss3Alt /> <FaJsSquare /> <FaReact /> <FaNpm />{" "}
          <DiVisualstudio /> <FaChrome />
        </Icons>
      </Text>
    </Section>
  );
};

export default Experience;
