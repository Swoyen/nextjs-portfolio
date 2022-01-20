import { AiOutlineClose } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  opacity: 0.9;
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

const steam = keyframes` 
 0% {
  background-position: 0 0;
}
50% {
  background-position: 400% 0;
}
100% {
  background-position: 0 0;
}`;

export const CardBorder = styled.div`
  position: relative;
  /* margin: 300px auto 0;
  width: 500px;
  height: 250px; */
  background: linear-gradient(0deg, #000, #272727);
  border-radius: 15px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    background: linear-gradient(
      45deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000
    );
    background-size: 400%;
    width: calc(96%);
    top: calc(2%);
    left: calc(2%);
    height: calc(96%);
    z-index: -1;
    animation: ${steam} 20s linear infinite;
  }

  &:after {
    filter: blur(60px);
  }
`;

export const BlogCard = styled.div`
  background: #212d45;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  transition: all 0.5s;
  :hover {
    box-shadow: 0px 0px 20px rgba(80, 78, 78, 1);
    transition: all 0.5s;
  }

  :hover ${Img} {
    width: 110%;
    height: 110%;
    transition: all 0.5s;
  }
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
  display: flex;
  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LinkSpan = styled.span`
  margin-left: 5px;
  flex: auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
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
  display: flex;
  &:hover {
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

// export const CloseButton = styled(AiOutlineClose)`
//   color: white;
//   background: black;
//   border-radius: 50%;
//   padding: 5px;
//   position: fixed;
//   top: 5px;
//   right: 5px;
//   cursor: pointer;
//   &:hover {
//     background: gray;
//   }
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 1rem;
//   }
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 1rem;
//   }
// `;
export const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  background: black;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  &:hover {
    background: gray;
  }
`;

export const InProgress = styled.div`
  height: 100px;
`;
