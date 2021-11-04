import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import VTimeLine from "../components/VTimeLine/VTimeLine";
import { SideBarProvider } from "../context/SideBarContext";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <SideBarProvider>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        {/* <Timeline /> */}
        <VTimeLine />
        {/* <Acomplishments /> */}
        <Contact />
      </Layout>
    </SideBarProvider>
  );
};

export default Home;
