import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { accomplishments } from "../../constants/constants";

const Accomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {accomplishments.map(({ number, text }, i) => (
        <Box key={i}>
          <BoxNum>{number}</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
