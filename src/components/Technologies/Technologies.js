import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

import {
  SiNextDotJs,
  SiVueDotJs,
  SiDotNet,
  SiLaravel,
  SiMysql,
  SiGithub,
  SiUnity,
  SiPython,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SubSectionDivider,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListIcon,
  ListIcons,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've learned these through personal projects and my employment.
    </SectionText>
    <List>
      <ListItem>
        <ListIcons>
          <ListIcon>
            <DiReact size="4rem" />
          </ListIcon>
          <ListIcon>
            <SiNextDotJs size="4rem" />
          </ListIcon>
          <ListIcon>
            <SiVueDotJs size="4rem" />
          </ListIcon>
        </ListIcons>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <SubSectionDivider />
          <ListParagraph>
            React.js <br />
            Next.js
            <br /> Vue <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIcons>
          <ListIcon>
            <SiDotNet size="4rem" />
          </ListIcon>
          <ListIcon>
            <SiLaravel size="4rem" />
          </ListIcon>
          <ListIcon>
            <SiMysql size="4rem" />
          </ListIcon>
        </ListIcons>

        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <SubSectionDivider />
          <ListParagraph>
            .NET Core <br />
            Entity Framework <br />
            Laravel <br />
            SQL <br />
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIcons>
          <ListIcon>
            <SiGithub size="4rem" />
          </ListIcon>
          <ListIcon>
            <SiUnity size="4rem" />
          </ListIcon>
          <ListIcon>
            <SiPython size="4rem" />
          </ListIcon>
        </ListIcons>
        <ListContainer>
          <ListTitle>Tools / Software</ListTitle>
          <SubSectionDivider />
          <ListParagraph>
            Git <br />
            Unity <br />
            C# <br />
            Java <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
