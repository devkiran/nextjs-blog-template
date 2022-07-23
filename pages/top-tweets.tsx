import type { NextPage } from "next";
import { Layout, TopTweets } from "components";
import { NextSeo } from "next-seo";

const Posts: NextPage = () => {
  return (
    <Layout>
      <>
        <NextSeo title="Top Tweets" description="Top Tweets" />

        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Top Tweets</h1>
          <p className="text-lg">
            Top tweets from the past week. Follow me on Twitter to hear more
            about what I share.
          </p>
          <div className="flex flex-col space-y-8">
            <TopTweets />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Posts;
