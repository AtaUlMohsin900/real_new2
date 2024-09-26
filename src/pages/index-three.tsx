import React from "react";
import Layout from "../../components/layout/Layout";
import HomeThreeBanner from "../../components/layout/banner/HomeThreeBanner";
import HomeThreeServices from "../../components/containers/home-three/HomeThreeServices";
import HomeThreeAgency from "../../components/containers/home-three/HomeThreeAgency";
import HomeThreePortfolio from "../../components/containers/home-three/HomeThreePortfolio";
import WorkSteps from "../../components/containers/home-three/WorkSteps";
import HomeTestimonialThree from "../../components/containers/home-three/HomeTestimonialThree";
import HomeThreeSponsor from "../../components/containers/home-three/HomeThreeSponsor";
import HomeThreeBlog from "../../components/containers/home-three/HomeThreeBlog";
import CtaThree from "../../components/containers/home-three/CtaThree";
import NextPage from "../../components/containers/home/NextPage";

const HomeThree = () => {
  return (
    <Layout header={3} footer={3} video={true}>
      <HomeThreeBanner />
      <HomeThreeServices />
      <HomeThreeAgency />
      <HomeThreePortfolio />
      <WorkSteps />
      <HomeTestimonialThree />
      <HomeThreeSponsor />
      <HomeThreeBlog />
      <CtaThree />
      <NextPage />
    </Layout>
  );
};

export default HomeThree;
