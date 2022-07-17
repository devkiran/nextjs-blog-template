import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { BlogPost, Layout } from "components";
import { NextSeo } from "next-seo";

const Posts: NextPage<{ posts: Post[] | null }> = ({ posts }) => {
  return (
    <Layout>
      <>
        <NextSeo title="All Posts" description="All Posts" />
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
          <p className="text-lg">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <div className="flex flex-col space-y-8">
            {posts &&
              posts.map((post) => <BlogPost key={post.title} post={post} />)}
          </div>
        </div>
      </>
    </Layout>
  );
};

export function getStaticProps() {
  const posts = allPosts.map((post) => {
    return {
      title: post.title,
      description: post.description,
      content: post.body,
      publishedAt: post.publishedAt,
      slug: post.slug,
    };
  });

  return { props: { posts: posts } };
}

export default Posts;
