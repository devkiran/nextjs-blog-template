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
              I&apos;ve 8+ years of software development experience building
              apps for startups and enterprises. I&apos;m excited to learn new
              languages and contribute to OSS. Loves to talk about building
              startups, programming, OSS.
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
