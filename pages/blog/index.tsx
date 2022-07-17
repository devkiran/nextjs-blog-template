import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import BlogPost from "components/BlogPost";
import { allPosts } from "contentlayer/generated";
import Layout from "components/Layout";

const Posts: NextPage<{ posts: Post[] | null }> = ({ posts }) => {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
        <p className="text-lg">
          I&apos;m excited to learn new languages and contribute to OSS. Loves
          to talk about building startups, programming, OSS.
        </p>
        <div className="flex flex-col space-y-8">
          {posts &&
            posts.map((post) => <BlogPost key={post.title} post={post} />)}
        </div>
      </div>
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
