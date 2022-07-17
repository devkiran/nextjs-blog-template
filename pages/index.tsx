import type { NextPage } from "next";
import Hero from "components/Hero";
import Layout from "components/Layout";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <NextSeo title="Home" description="Home" />
        <Hero />
      </>
    </Layout>
  );
};

export default Home;
