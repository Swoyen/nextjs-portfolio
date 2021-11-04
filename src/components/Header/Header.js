import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import MobileDrawer from "../MobileDrawer/MobileDrawer";

import {
  Brand,
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <>
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
            href=""
          >
            <DiCssdeck size="3rem" /> <Brand>Swoyen</Brand>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#technologies">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons
          onClick={() => window.open("https://github.com/Swoyen", "_blank")}
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          onClick={() =>
            window.open("https://www.linkedin.com/in/Swoyen", "_blank")
          }
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
      <MobileDrawer />
    </Container>
  </>
);

export default Header;
