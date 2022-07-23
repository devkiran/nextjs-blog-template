import type { Post } from "contentlayer/generated";
import Link from "next/link";

const BlogPost = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
              {post.title}
            </h4>
            <p className="text-base text-gray-600 dark:text-gray-400">
              {post.description}
            </p>
            <p className="text-gray-500">{post.publishedAt}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
