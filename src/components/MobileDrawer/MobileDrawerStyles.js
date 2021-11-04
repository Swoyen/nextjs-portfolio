import { AiOutlineClose } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

export const MenuHandler = styled.div`
  display: "flex";
  align-items: "center";
  justify-content: "center";
  flex-shrink: "0";
  width: "26px";
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  margin-right: 5px;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: block;
  }
`;

export const SideBarContainer = styled.div`
  position: fixed;
  width: ${({ isVisible }) => (isVisible ? "100%" : "0%")};
  height: ${({ isVisible }) => (isVisible ? "100%" : "0%")};
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 150;
`;

const grow = keyframes`
  from {
    left:-350px;
  }
  to{
    left:0px;
  }
`;

export const SideBar = styled.div`
  position: relative;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  animation: ${grow} 0.4s ease-in-out;

  height: 100%;
  top: 0px;
  left: 0px;
  width: 400px;
  background: #212d45;
  box-shadow: 0px 0px 5px black;
  opacity: 1;
  z-index: 151;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 300px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 350px;
  }
`;

export const SideBarContent = styled.ul`
  text-align: center;
  padding-top: 4em;
  padding-bottom: 4em;
  & > li {
    padding: 0.5em;
    margin: 0em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5em;
  }
`;

export const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  background: black;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  right: 5px;
  top: 5px;
`;

export const LinkDivider = styled.div`
  width: 50px;
  height: 4px;
  border-radius: 30px;
  z-index: 155;
  margin-bottom: 2em;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export const SideBarFooter = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0px;
  width: 100%;
  margin: 0 auto;
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 45px;
  }
`;

export const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;
