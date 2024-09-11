import React from "react";
import Layout from "../../components/layout/Layout";
import CmnBanner from "../../components/layout/banner/CmnBanner";
import TeamMain from "../../components/containers/TeamMain";

const OurTeams = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Awesome Teams" navigation="Our Teams" />
      <TeamMain />
    </Layout>
  );
};

export default OurTeams;
