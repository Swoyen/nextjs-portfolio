import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import Modal from "react-modal";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  background: #212d45;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  font-size: 2rem;
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1px;
  color: #9cc9e3;
  padding: 0.5rem 0 0 0;
  font-size: ${(props) => (props.isTitle ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 40px;
  height: 6px;
  border-radius: 10px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: white;
  font-size: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
  border-radius: 30px;
  transition: 0.5s;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export const ModalShowButton = styled.button`
  color: white;
  font-size: 1.5rem;
  padding: 1.5rem;
  border-width: 0px;
  cursor: pointer;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 90%);
  border-radius: 30px;
  transition: 0.5s;
  &:hover {
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
`;

export const ModalParagraph = styled.p``;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

export const CloseButton = styled(AiOutlineClose)`
  color: white;
  background: black;
  border-radius: 50%;
  padding: 5px;
  position: fixed;
  top: 5px;
  right: 5px;
  cursor: pointer;
  &:hover {
    background: gray;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const InProgress = styled.div`
  height: 100px;
`;
