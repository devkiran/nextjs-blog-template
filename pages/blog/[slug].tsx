import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Layout from "components/Layout";

const Post: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Layout>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        <div className="prose w-full bg-yellow-300 text-gray-900">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {post.body.raw}
          </ReactMarkdown>
        </div>
      </div>
    </Layout>
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
