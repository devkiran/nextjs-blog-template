import type { NextPage } from "next";
import Hero from "components/Hero";
import Header from "components/Header";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
