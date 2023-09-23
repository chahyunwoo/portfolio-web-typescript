import Layout from "../layouts/Layout";
import SectionTitle from "../components/atoms/SectionTitle";
import SkillStackPc from "../components/SkillStackPc";
import SkillStackMo from "../components/SkillStackMo";

export default function Skills() {
  return (
    <Layout
      backgroundColor="#ffffff"
      id="skills"
      height={{ base: "auto", lg: "calc(100vh - 4.5rem)" }}
    >
      <SectionTitle direction="right" absolute={true}>
        SKILLS
      </SectionTitle>
      <SkillStackPc />
      <SkillStackMo />
    </Layout>
  );
}
