import React, { useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  CloseButton,
  ModalShowButton,
  InProgress,
  LinkSpan,
  ImgContainer,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Modal from "react-modal";
import { BsCode } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { RiBookOpenLine } from "react-icons/ri";
import Loader from "react-loader-spinner";

Modal.setAppElement("#__next");

const Projects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState(null);

  const openModal = (project) => {
    setProject(project);
    setIsOpen(true);
  };

  const disableScroll = () => {
    document.body.classList.add("stop-scrolling");
  };

  const enableScroll = () => {
    document.body.classList.remove("stop-scrolling");
  };

  const afterOpenModal = () => {
    disableScroll();
  };

  const closeModal = () => {
    setIsOpen(false);
    enableScroll();
  };

  return (
    <>
      <Modal
        class
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <HeaderThree isTitle>{project?.title}</HeaderThree>
        <p>{project?.description}</p>
        <CloseButton
          onClick={() => closeModal()}
          style
          size="3rem"
        ></CloseButton>
      </Modal>
      <Section id="projects">
        <SectionDivider />
        <SectionTitle main>Projects </SectionTitle>
        <GridContainer>
          {projects.map((project) => (
            <BlogCard key={project.id}>
              <ImgContainer>
                <Img src={project.image} />
              </ImgContainer>

              <TitleContent>
                <HeaderThree isTitle>{project.title}</HeaderThree>
                <Hr />
              </TitleContent>
              {/* <CardInfo>{description}</CardInfo> <Hr /> */}
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              {project.status === "inProgress" ? (
                <InProgress>
                  In-Progress
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={50}
                    width={50}
                  />
                </InProgress>
              ) : (
                <UtilityList>
                  <ExternalLinks href={project.source} target="_blank">
                    <BsCode style={{ flex: "auto" }} size="1.5rem" />
                    <LinkSpan>View Code</LinkSpan>
                  </ExternalLinks>
                  <ExternalLinks href={project.visit} target="_blank">
                    <MdWeb />
                    <LinkSpan>Website</LinkSpan>
                  </ExternalLinks>
                  <ModalShowButton onClick={() => openModal(project)}>
                    <RiBookOpenLine />
                    <LinkSpan>Details</LinkSpan>
                  </ModalShowButton>
                </UtilityList>
              )}
            </BlogCard>
          ))}
        </GridContainer>
      </Section>
    </>
  );
};
export default Projects;
