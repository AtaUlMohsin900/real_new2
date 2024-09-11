import React from "react";
import Layout from "../../components/layout/Layout";
import HomeFourBanner from "../../components/layout/banner/HomeFourBanner";
import Info from "../../components/containers/home-four/Info";
import ProjectSlider from "../../components/containers/home-four/ProjectSlider";
import HomeFourProject from "../../components/containers/home-four/HomeFourProject";

const HomeFour = () => {
  return (
    <Layout header={4} footer={4} video={true}>
      <HomeFourBanner />
      <Info />
      <ProjectSlider />
      <HomeFourProject />
    </Layout>
  );
};

export default HomeFour;
