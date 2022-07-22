import type { NextPage } from "next";
import { Layout, Hero, TopTweets } from "components";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <NextSeo title="Home" description="Home" />
        <Hero />
        <TopTweets />
      </>
    </Layout>
  );
};

export default Home;
