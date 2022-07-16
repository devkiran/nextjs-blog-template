import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import Header from "components/Header";
import BlogPost from "components/BlogPost";
import { allPosts } from "contentlayer/generated";

const Posts: NextPage<{ posts: Post[] | null }> = ({ posts }) => {
  return (
    <div className="h-screen w-full">
      <Header />
      <section className="py-20 px-5 md:px-10">
        <div className="m-auto flex w-full max-w-3xl flex-col">
          <div className="mb-10 space-y-5">
            <h1 className="text-4xl font-bold text-gray-900">All Posts</h1>
            <p className="text-lg">
              These are a collection of code snippets I have used in the past
              and saved. Some are Serverless Functions, which include set up
              instructions. Others are anything from random CSS snippets to
              Node.js scripts.
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            {posts &&
              posts.map((post) => <BlogPost key={post.title} post={post} />)}
          </div>
        </div>
      </section>
    </div>
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
