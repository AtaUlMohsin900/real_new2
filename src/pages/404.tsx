import React from "react";
import Layout from "../../components/layout/Layout";
import CmnBanner from "../../components/layout/banner/CmnBanner";
import ErrorMain from "../../components/containers/ErrorMain";

const ErrorPage = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Error" navigation="Error" />
      <ErrorMain />
    </Layout>
  );
};

export default ErrorPage;
