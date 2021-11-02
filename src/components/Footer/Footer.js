import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  SourceLink,
} from "./FooterStyles";
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0424-076-095">+61 0424-076-095</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:swoyenrajsinghsuwal@gmail.com">
            swoyenrajsinghsuwal@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Made with React and NextJS.
            <SourceLink
              href="https://www.github.com/Swoyen/nextjs-portfolio"
              target="_blank"
            >
              View Source. <IoMdOpen size="2rem" />
            </SourceLink>
          </Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/swoyen" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/swoyen" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
