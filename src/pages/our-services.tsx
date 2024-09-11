import React from "react";
import Layout from "../../components/layout/Layout";
import CmnBanner from "../../components/layout/banner/CmnBanner";
import ServiceMain from "../../components/containers/ServiceMain";
import HomeTwoModal from "../../components/containers/home-two/HomeTwoModal";
import IT_TelecomTwo from "../../components/containers/service-details/W3ProcessTwo";
import HomeTestimonialThree from "../../components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "../../components/containers/service-details/CtaTwo";

const OurServices = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" />
      <ServiceMain />
      <HomeTwoModal />
      <IT_TelecomTwo />
      <HomeTestimonialThree />
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
