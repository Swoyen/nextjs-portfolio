import styled from "styled-components";

export const TimeLineTitle = styled.h3`
  margin-bottom: 5px;
`;

export const TimeLineSubtitle = styled.h4`
  margin-bottom: 5px;
`;

export const TimeLineContent = styled.div`
  margin-top: 15px;
`;

export const TimeLineParagraph = styled.div`
  display: flex;
  margin: 10px 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const TimeLineParagraphContent = styled.div`
  font-size: 0.9em !important;
  flex: 5;
`;

export const TimeLineParagraphHeading = styled.div`
  font-size: 0.9em !important;
  flex: 1;
  font-weight: 700;
  color: gray;
`;
