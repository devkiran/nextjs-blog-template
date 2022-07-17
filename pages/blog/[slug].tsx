import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { Layout } from "components";
import { NextSeo } from "next-seo";

const Post: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Layout>
      <>
        <NextSeo title={post.title} description={post.description} />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            className="prose prose-base prose-slate max-w-none text-gray-900"
          >
            {post.body.raw}
          </ReactMarkdown>
        </div>
      </>
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
