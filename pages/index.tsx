import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { Layout, Hero, SubscribeForm, TopBlogPost, Divider } from "components";
import { NextSeo } from "next-seo";
import { allPosts } from "contentlayer/generated";

const Home: NextPage<{ posts: Post[] | null }> = ({ posts }) => {
  return (
    <Layout>
      <>
        <NextSeo title="Home" description="Home" />
        <Hero />
        <Divider />
        <TopBlogPost posts={posts} />
        <Divider />
        <SubscribeForm />
      </>
    </Layout>
  );
};

export function getStaticProps() {
  const posts = allPosts.map((post) => {
    return {
      title: post.title,
      description: post.description,
      publishedAt: post.publishedAt,
      slug: post.slug,
    };
  });

  return { props: { posts: posts } };
}

export default Home;
