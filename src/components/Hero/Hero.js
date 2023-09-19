import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Swoyen. I am a software developer based in Adelaide. I am
        open for new opportunities and software projects.
      </SectionText>
      {/* <Link href="#contact" passHref>
        <Button>
          
        </Button>
      </Link> */}
      <Link href="#contact" passHref>
        <LinkButton>
          <AiOutlineArrowDown />
          <span style={{ marginLeft: "5px" }}>Contact me</span>
        </LinkButton>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
