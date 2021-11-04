import React, { useContext, useEffect, useRef } from "react";
import { AiOutlineDownload, AiOutlineMenu } from "react-icons/ai";
import {
  ButtonContainer,
  CloseButton,
  LinkDivider,
  MenuIcon,
  NavLink,
  SideBar,
  SideBarContainer,
  SideBarContent,
  SideBarFooter,
  SocialIcons,
} from "./MobileDrawerStyles";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SideBarContext } from "../../context/SideBarContext";
import Link from "next/link";
import { SubSectionDivider } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

const MobileDrawer = () => {
  const [isVisible, setIsVisible] = useContext(SideBarContext);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <MenuIcon onClick={() => setIsVisible(true)}>
        <AiOutlineMenu size="2.5rem" />
      </MenuIcon>
      <SideBarContainer isVisible={isVisible}>
        <SideBar isVisible={isVisible} ref={wrapperRef}>
          <CloseButton onClick={() => setIsVisible(false)} size="1.7em" />
          <SideBarContent>
            <li>
              <Link href="#projects">
                <NavLink onClick={() => setIsVisible(false)}>Projects</NavLink>
              </Link>
              <LinkDivider />
            </li>
            <li>
              <Link href="#technologies">
                <NavLink onClick={() => setIsVisible(false)}>
                  Technologies
                </NavLink>
              </Link>
              <LinkDivider />
            </li>
            <li>
              <Link href="#about">
                <NavLink onClick={() => setIsVisible(false)}>About</NavLink>
              </Link>
              <LinkDivider />
            </li>
            <li>
              <Link href="#contact">
                <NavLink onClick={() => setIsVisible(false)}>Contact</NavLink>
              </Link>
              <LinkDivider />
            </li>
          </SideBarContent>
          <ButtonContainer>
            <Button>
              <AiOutlineDownload />
              <span style={{ marginLeft: "5px" }}> Resume</span>
            </Button>
          </ButtonContainer>
          <SideBarFooter>
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
          </SideBarFooter>
        </SideBar>
      </SideBarContainer>
    </>
  );
};

export default MobileDrawer;
