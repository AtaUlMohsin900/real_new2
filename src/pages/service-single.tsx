import React from "react";
import Layout from "../../components/layout/Layout";
import ServiceDetailsMain from "../../components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "../../components/layout/banner/ServiceDetailsBanner";
import IT_Telecom from "../../components/containers/service-details/W3Process";
import CtaTwo from "../../components/containers/service-details/CtaTwo";

const ServiceDetails = () => {
  return (
    <Layout header={2} footer={5} video={false}>
      <ServiceDetailsBanner />
      <ServiceDetailsMain />
      <IT_Telecom />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
