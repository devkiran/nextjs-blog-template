import { BlogPost } from "components";
import type { Post } from "contentlayer/generated";

const TopBlogPost = ({ posts }: { posts: Post[] | null }) => {
  return (
    <>
      <h2 className="mb-5 text-2xl font-bold text-gray-700">
        Latest Articles & News
      </h2>
      <div className="flex flex-col space-y-5">
        {posts &&
          posts.map((post) => <BlogPost key={post.title} post={post} />)}
      </div>
    </>
  );
};

export default TopBlogPost;
