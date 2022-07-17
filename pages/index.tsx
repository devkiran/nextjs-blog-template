import type { NextPage } from "next";
import { Layout, Hero } from "components";
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
