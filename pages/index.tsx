import type { NextPage } from "next";
import Hero from "components/Hero";
import Layout from "components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Hero />
      </div>
    </Layout>
  );
};

export default Home;
