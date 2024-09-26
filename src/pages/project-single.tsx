import React from "react";
import Layout from "../../components/layout/Layout";
import CmnBanner from "../../components/layout/banner/CmnBanner";
import ProjectDetailsMain from "../../components/containers/project/ProjectDetailsMain";
import IT_Telecom from "../../components/containers/service-details/W3Process";

const ProjectDetails = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="Brand Identity"
        navigation="Brand Identity"
        parent="Projects"
        parentLink="our-projects"
      />
      <ProjectDetailsMain />
      <IT_Telecom />
    </Layout>
  );
};

export default ProjectDetails;
