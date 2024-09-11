import React from "react";
import Layout from "../../components/layout/Layout";
import NextPage from "../../components/containers/home/NextPage";
import RegisterForm from "../../components/containers/RegisterForm";

const Home = () => {
  return (
    <Layout header={1} footer={1} video={true}>
      <div>
        <RegisterForm />
        <NextPage />
      </div>
    </Layout>
  );
};

export default Home;
