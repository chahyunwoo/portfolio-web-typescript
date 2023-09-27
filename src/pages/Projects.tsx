import Layout from "../layouts/Layout";
import SectionTitle from "../components/atoms/SectionTitle";

import ProjectsContainerPc from "../components/ProjectsContainerPc";

export default function Projects() {
  return (
    <Layout
      backgroundColor="#070716"
      id="projects"
      height={{ base: "auto", lg: "calc(100vh - 4.5rem)" }}
    >
      <SectionTitle direction="left" absolute={true} isWhiteColor={true}>
        PROJECTS
      </SectionTitle>
      <ProjectsContainerPc />
    </Layout>
  );
}
