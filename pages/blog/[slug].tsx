import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import Header from "components/Header";
import { allPosts } from "contentlayer/generated";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const Post: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <div className="h-screen w-full">
      <Header />
      <article className="py-20 px-5 md:px-10">
        <div className="m-auto flex w-full max-w-3xl flex-col">
          <h1 className="text-4xl font-bold leading-snug text-gray-900">
            {post.title}
          </h1>
          <div className="prose mt-5 text-gray-900">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {post.body.raw}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
};

export function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params?.slug);

  return { props: { post } };
}

export default Post;
