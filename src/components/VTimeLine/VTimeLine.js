import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SubSectionDivider,
} from "../../styles/GlobalComponents";
import { workandeducation } from "../../constants/constants";
import {
  TimeLineTitle,
  TimeLineSubtitle,
  TimeLineParagraphContent,
  TimeLineContent,
  TimeLineParagraphHeading,
  TimeLineParagraph,
} from "./VTimeLineStyles";
import Button from "../../styles/GlobalComponents/Button";
const VTimeLine = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm hardworking and determined. Below is a timeline showing my recent
        history.
      </SectionText>
      <VerticalTimeline>
        {workandeducation.map((work) => (
          <VerticalTimelineElement
            key={work.id}
            date={work.date}
            contentStyle={{
              background: "#212d45",
              color: "#fff",
              borderRadius: "30px",
              border: "0px solid black",
              boxShadow: "0px 0px 10px rgba(255,255,255,0.2)",
            }}
            dateClassName="timeLineDate"
            contentArrowStyle={{
              borderRight: "7px solid  white",
            }}
            icon={work.type === "job" ? <MdWork /> : <FaUniversity />}
            iconStyle={{
              background:
                work.type === "job"
                  ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
                  : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)",
              color: "#fff",
            }}
          >
            <TimeLineTitle>{work.title}</TimeLineTitle>
            <TimeLineSubtitle>{work.company}</TimeLineSubtitle>
            <SubSectionDivider colorAlt={work.type !== "job"} />
            <TimeLineContent>
              {work.type === "education" ? (
                <TimeLineParagraph>
                  <TimeLineParagraphHeading>Status</TimeLineParagraphHeading>
                  <TimeLineParagraphContent>
                    {work.status}
                  </TimeLineParagraphContent>
                </TimeLineParagraph>
              ) : (
                <>
                  <TimeLineParagraph>
                    <TimeLineParagraphHeading>Tasks</TimeLineParagraphHeading>
                    <TimeLineParagraphContent>
                      {work.tasks}
                    </TimeLineParagraphContent>
                  </TimeLineParagraph>
                  <TimeLineParagraph>
                    <TimeLineParagraphHeading>Tools</TimeLineParagraphHeading>
                    <TimeLineParagraphContent>
                      {work.tools}
                    </TimeLineParagraphContent>
                  </TimeLineParagraph>
                </>
              )}
            </TimeLineContent>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Button
        style={{ marginTop: "20px" }}
        onClick={() => window.open("/files/resume.pdf", "_blank").focus()}
      >
        <AiOutlineDownload />
        <span style={{ marginLeft: "5px" }}> Resume</span>
      </Button>
    </Section>
  );
};

export default VTimeLine;
