import Layout from "../layouts/Layout";
import SectionTitle from "../components/atoms/SectionTitle";
import { useState } from "react";
import ProjectsTab from "../components/ProjectsTab";
import ProjectsList from "../components/ProjectsList";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredProjects = PROJECTS;

  return (
    <Layout backgroundColor="#f5f5f5" id="projects" deletePx={true}>
      <SectionTitle direction="left">PROJECTS</SectionTitle>
      <ProjectsTab handleTabChange={handleTabChange} />
      <ProjectsList projects={filteredProjects} activeTab={activeTab} />
    </Layout>
  );
}
