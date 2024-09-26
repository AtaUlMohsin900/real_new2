import React from "react";
import Layout from "../../components/layout/Layout";
import CmnBanner from "../../components/layout/banner/CmnBanner";
import BlogMain from "../../components/containers/blog/BlogMain";

const BlogPage = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Blog Standard" navigation="Blog Standard" />
      <BlogMain />
    </Layout>
  );
};

export default BlogPage;
